export class LatestJob{
    private readonly _job_id:string;
    private readonly _job_category_type:string[];
    private readonly _job_type:string;
    private readonly _job_name:string;
    private readonly _job_description:string;
    private readonly _job_application_start_date:string;
    private readonly _job_application_last_date:string;
    private readonly _job_eligibility_by_gender:string[];
    private readonly _job_eligibility_by_cast:string[];
    private readonly _job_registration_link:string;
    private readonly _job_notification_link:string;
private readonly _job_eligibility_by_education:string;

    constructor(job_id: string,
                job_category_type: string[],
                job_type: string,
                job_name: string,
                job_description: string,
                job_application_start_date: string,
                job_application_last_date: string,
                job_eligibility_by_gender: string[],
                job_eligibility_by_cast: string[],
                job_registration_link: string,
                job_notification_link: string,
                job_eligibility_by_education:string) {
        this._job_id = job_id;
        this._job_category_type = job_category_type;
        this._job_type = job_type;
        this._job_name = job_name;
        this._job_description = job_description;
        this._job_application_start_date = job_application_start_date;
        this._job_application_last_date = job_application_last_date;
        this._job_eligibility_by_gender = job_eligibility_by_gender;
        this._job_eligibility_by_cast = job_eligibility_by_cast;
        this._job_registration_link = job_registration_link;
        this._job_notification_link = job_notification_link;
        this._job_eligibility_by_education = job_eligibility_by_education;
    }

    get job_description(): string {
        return this._job_description;
    }

    get job_application_start_date(): string {
        return this._job_application_start_date;
    }

    get job_application_last_date(): string {
        return this._job_application_last_date;
    }

    get job_eligibility_by_gender(): string[] {
        return this._job_eligibility_by_gender;
    }

    get job_eligibility_by_cast(): string[] {
        return this._job_eligibility_by_cast;
    }

    get job_registration_link(): string {
        return this._job_registration_link;
    }

    get job_notification_link(): string {
        return this._job_notification_link;
    }

    get job_id(): string {
        return this._job_id;
    }

    get job_category_type(): string[] {
        return this._job_category_type;
    }

    get job_type(): string {
        return this._job_type;
    }


    get job_name(): string {
        return this._job_name;
    }

    get job_eligibility_by_education(): string {
        return this._job_eligibility_by_education;
    }
}