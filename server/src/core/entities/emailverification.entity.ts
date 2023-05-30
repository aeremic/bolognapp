export class EmailVerificationEntity {
    public id?: number;

    public userId: number;

    public email: string;

    public sentOn: Date;

    public code: string;

    public expired?: boolean;
}