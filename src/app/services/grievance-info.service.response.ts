export interface GrievanceInfo {
    grievances:    Grievance[];
}

export interface Grievance {
    name:          string;
    mobileNumber: string;
    grievance:    string;
    document:      string;
    status:          number;
}

