type UserCredentialsType = {
  login: string;
  passw: string;
  forgoout: boolean;
  createdAt?: Date;
};

class UserCredentials {
  private localUser = "LocalUserCredentials";

  public ClearUserCredentials() {
    localStorage.removeItem(this.localUser);
  }

  public InsertUserCredentials(user: UserCredentialsType) {
    localStorage.setItem(this.localUser, JSON.stringify(user));
  }

  public getUserCredentials(): UserCredentialsType | null {
    const credentials = localStorage.getItem(this.localUser);

    if (credentials) {
      return JSON.parse(credentials);
    }

    return null;
  }
}

export { UserCredentials };
