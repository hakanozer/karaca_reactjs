export interface IUserUpdate {
    user: UserUpdate[];
}

export interface UserUpdate {
    durum: boolean;
    mesaj: string;
}
