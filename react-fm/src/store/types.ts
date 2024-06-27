// TODO: needs a better typing for Recoil
type AtomEffectParams = {
  // eslint-disable-next-line
  [key: string]: any;
};
interface LoginState {
  isLoggedIn: boolean;
  isAdmin: boolean;
  name: string;
  picture: string;
  family_name: string;
  given_name: string;
  id: string;
}

interface RootState {
  login: LoginState;
}
export type { AtomEffectParams, RootState, LoginState };
