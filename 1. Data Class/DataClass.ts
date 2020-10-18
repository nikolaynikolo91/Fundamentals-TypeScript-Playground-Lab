interface IDataClass {
    method: string,
    url: string,
    version: string,
    massage: string,
    fulfilled: boolean,
    response: string | undefined
  
}

class Data implements IDataClass {
   public response: string | undefined
    public fulfilled: boolean
    constructor(
        public method: string,
        public url: string,
            public version: string,
        public massage: string
    ) {
        this.response = undefined
        this.fulfilled = false;
    }
}

export default Data;

