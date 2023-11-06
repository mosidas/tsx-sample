class ChartModel {
    constructor(
        public id: number,
        public labels: string[],
        public data: number[],
        public color: string,
    ) {}
}

export default ChartModel;
