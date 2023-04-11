class Tag {
    static get indentSize() { return 2; }

    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImpl(indent) {
        let html = [];
        
        html.push(`${i}<${this.name}>\n`);
        if (this.text.length > 0) {
            html.push(' '.repeat(Tag.indentSize * (indent + 1)));
            html.push(this.text);
            html.push('\n');
        }

        for (let child of this.children)
            html.push(child.toStringImpl(indent + 1));

        html.push(`${i}</${this.name}>\n`);
        return html.join();
    }

    toString() {
        return this.toStringImpl(0);
    }

    static create(name) {
        return new HtmlBuilder(name);
    }
}

class HtmlBuilder {
    constructor(rootName) {
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }

    // non-fluent
    addChild(childName, childText) {
        let child = new Tag(childName, childText);
        this.root.children.push(child);
    }

    // fluent
    addChildFluent(childName, childText) {
        let child = new Tag(childName, childText);
        this.root.children.push(child);
        return this;
    }

    toString() {
        return this.root.toString();
    }

    clear() {
        this.root = new Tag(this.rootName);
    }

    build() {
        return this.root;
    }
}

// just a single paragraph using string concatenation
const hello = 'hello';
let html = [];
html.push('<p>');
html.push(hello);
html.push('</p>');
console.log(html.join());

// a list with 2 words in it
const words = ['hello', 'world'];
html = [];
html.push('<ul>\n');
for (let word of words)
    html.push(`  <li>${word}</li>\n`);
html.push('</ul>');
console.log(html.join());

// ordinary non-fluent builder
//let builder = new HtmlBuilder('ul');
let builder = Tag.create('ul');
for (let word of words)
    builder.addChild('li', word);
//console.log(builder.toString());
let tag = builder.build();
console.log(tag.toString());

// fluent builder
builder.clear();
builder
    .addChildFluent('li', 'foo')
    .addChildFluent('li', 'bar')
    .addChildFluent('li', 'baz');
console.log(builder.toString());


class Field {
    constructor(name) {
        this.name = name;
    }
}

class Class {
    constructor(name) {
        this.name = name;
        this.fields = [];
    }

    toString() {
        let buffer = [];
        buffer.push(`class ${this.name} {\n`);

        if (this.fields.length > 0) {
            buffer.push(`  constructor(`);
            for (let i = 0; i < this.fields.length; ++i) {
                buffer.push(this.fields[i].name);
                if (i + 1 !== this.fields.length)
                    buffer.push(', ');
            }
            buffer.push(`) {\n`);
            for (let field of this.fields) {
                buffer.push(`    this.${field.name} = ${field.name};\n`);
            }
            buffer.push('  }\n');
        }

        buffer.push('}');
        return buffer.join('');
    }
}

class CodeBuilder {
    constructor(className) {
        this._class = new Class(className);
    }

    addField(name) {
        this._class.fields.push(
            new Field(name)
        );
        return this;
    }

    toString() {
        return this._class.toString();
    }
}

describe('builder', function () {
    it('empty test', function () {
        let cb = new CodeBuilder('Foo');
        expect(cb.toString())
            .toEqual('class Foo {\n}');
    });

    it('person test', function () {
        let cb = new CodeBuilder('Person');
        cb.addField('name').addField('age');
        expect(cb.toString())
            .toEqual('class Person {\n'
                + '  constructor(name, age) {\n'
                + '    this.name = name;\n'
                + '    this.age = age;\n'
                + '  }\n'
                + '}');
    });
});

