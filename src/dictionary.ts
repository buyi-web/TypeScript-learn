
type Callback<K, V> = (key: K, val: V) => void

export class Dictionary<K, V>{
    private keys: K[] = [];
    private vals: V[] = [];

    set(key: K, val: V) {
        const i = this.keys.indexOf(key)
        if(i < 0) {
            this.keys.push(key)
            this.vals.push(val)
        }else {
            this.vals[i] = val
        }
    }

    get(key: K) {
        const i = this.keys.indexOf(key)
        return this.vals[i]
    }
    forEach(callback: Callback<K, V>) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i];
            callback(k, v);
        })
    }

    has(key: K) {
        return this.keys.indexOf(key)
    }

    delete(key: K) {
        const i = this.keys.indexOf(key)
        if(i === -1){
            return
        }else {
            this.keys.splice(i, 1)
            this.vals.splice(i, 1)
        }
    }

    size() {
        return this.keys.length
    }
}