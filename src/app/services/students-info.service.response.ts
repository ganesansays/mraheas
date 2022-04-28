export interface StudentsInfo {
    disbursmentInfo:    DisbursmentInfo[];
    filterInfo:         FilterInfo;
    paginationInfo:     PaginationInfo;
}

export interface DisbursmentInfo {
    name:          string;
    aadhaarNumber: string;
    ugColledge:    string;
    district:      string;
    year:          number;
    term1Status:   string;
    term2Status:   string;
    accountNumber: string;
    select: boolean;
    color: string;
}

export interface FilterInfo {
    districts: string[];
    colledges: string[];
    years:     number[];
    status:    string[];
}

export interface PaginationInfo {
    currentPage:    number;
    totalPages:     number;
    recordsPerPage: number;
    totalResultSize: number;
    length: number;
}
