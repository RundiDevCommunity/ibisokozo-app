import { Injectable } from '@angular/core';

import {
    State,
    StateToken,
    Selector,
    Action,
    StateContext,
    Store,
} from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DialogModel } from './notification.models';
import {
    OpenDialog,

} from './notification.actions';


@State<DialogModel>({
    name: 'dialog',
    defaults: {
        modal: {
            title: null,
            type: null,
            message: null,
            isActive: false,
            response: null,
            action: null,
        },
    },
})
@Injectable()
export class DialogState {
    constructor() {
        //comment
    }

    @Selector()
    static GetDialog(state: DialogModel): any {
        return state.modal;
    }

    @Selector()
    static isActive(state: DialogModel): any {
        return state.modal.isActive;
    }

    @Action(OpenDialog)
    openDialog(ctx: StateContext<DialogModel>, action: OpenDialog) {
        ctx.patchState({
            modal: {
                type: action.payload.type,
                title: action.payload.title,
                message: action.payload.message,
                isActive: true,
                response: null,
                action: null,
            },
        });
    }



  


}
