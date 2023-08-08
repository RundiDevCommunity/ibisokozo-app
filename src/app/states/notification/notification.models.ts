export interface DialogModel {
    modal: {
        title: string | null;
        type: string | null;
        message: string | null;
        isActive: boolean | false;
        response: string | null;
        action: string | null;
    };
}
