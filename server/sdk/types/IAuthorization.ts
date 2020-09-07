import { IRoom } from '../../../definition/IRoom';
import { IUser } from '../../../definition/IUser';

export type RoomAccessValidator = (room: Partial<IRoom>, user: Pick<IUser, '_id'>, extraData?: object) => Promise<boolean>;

export interface IAuthorization {
	hasAllPermission(userId: string, permissions: string[], scope?: string): Promise<boolean>;
	hasPermission(userId: string, permissionId: string, scope?: string): Promise<boolean>;
	hasAtLeastOnePermission(userId: string, permissions: string[], scope?: string): Promise<boolean>;
	canAccessRoom: RoomAccessValidator;
}
