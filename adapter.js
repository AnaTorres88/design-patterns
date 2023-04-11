class RedisDataManager {
    connect() {
        return 'Connecting to DB';
    }

    scan() {
        return 'Data from DB'
    }
}

class DataManager {
    getData() {
        return 'Legacy Data'
    }
}

class Adapter {
    redis = new RedisDataManager();
    getConnect() {
        return this.redis.connect();
    }
    getData() {
    return this.redis.scan();
    }
}

class Client {
    dataManager
    constructor(dataManager) {
        this.dataManager = dataManager;
    }
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