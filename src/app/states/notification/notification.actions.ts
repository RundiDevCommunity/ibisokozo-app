export class OpenDialog {
    static readonly type = '[Dialog] open Modal';
    constructor(
        public payload: {
            title: string;
            message: string;
            type: string;
        }
    ) {}
}






