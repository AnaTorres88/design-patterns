
// Class which has two methods, scan and connect
class RedisDataManager {
    connect() {
        return 'Connecting to DB';
    }

    scan() {
        return 'Data from DB'
    }
}

// Class which is the legacy class, it has only one method which is getData.
class DataManager {
    getData() {
        return 'Legacy Data'
    }
}

/* This is the Adapter class. Instantiates the RedisDataManager class and wraps its connect method
into a getConnect method. The same technique is used with the scan method of the RedisDataManager class*/
class Adapter {
    redis = new RedisDataManager();
    getConnect() {
        return this.redis.connect();
    }
    getData() {
        return this.redis.scan();
    }
}

// The main place in which we call the methods.
class Client {
    dataManager
    constructor(dataManager) {
        this.dataManager = dataManager;
    }
    // These are the methods that will allow us to connect to the RedisDataManager using a method like the legacy Database
    getConnect() {
        console.log(this.dataManager.getConnect());
    }
    getData() {
        console.log(this.dataManager.getData());
    }
}
const client = new Client(new Adapter());
client.getConnect();

// Connecting to DB
// Data from DB