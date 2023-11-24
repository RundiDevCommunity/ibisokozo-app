// auth.state.ts

import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

export class SetAuthenticated {
  static readonly type = '[Auth] Set Authenticated';
  constructor(public isAuthenticated: boolean, public token: string | null = null) {}
}

interface AuthStateModel {
  isAuthenticated: boolean;
  token: string | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticated: false,
    token: null,
  },
})
@Injectable()
export class AuthState {
  @Action(SetAuthenticated)
  setAuthenticated(ctx: StateContext<AuthStateModel>, action: SetAuthenticated) {
    ctx.patchState({
      isAuthenticated: action.isAuthenticated,
      token: action.token,
    });
  }
}
