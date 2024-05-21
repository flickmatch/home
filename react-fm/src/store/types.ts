// TODO: needs a better typing for Recoil
type AtomEffectParams = {
  // eslint-disable-next-line
  [key: string]: any;
};

interface LoginState {
  isLoggedIn: boolean;
}

interface RootState {
  login: LoginState;
  // other state slices
}

export type { AtomEffectParams, RootState, LoginState };
