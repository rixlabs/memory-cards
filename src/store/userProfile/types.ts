export interface UserProfile {
    uid: string;
    displayName: string;
    email: string;
}

export interface UserProfileState {
    userProfile?: UserProfile;
}
