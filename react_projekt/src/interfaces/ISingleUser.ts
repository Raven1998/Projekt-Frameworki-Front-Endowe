export interface ISingleUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;

        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
};

type Currency = "$" | "€"
export interface UserInstance {
    name: string
    surname: string
    email: string
    phone: string
    company: {
        name: string
        job_title: string
        expertise: Array<string>
        specialties: Array<string>
        admission_to_practice_law: Array<string>
        countries: Array<string>
    },
    internalReviews: Array<{
        id: number,
        name: string
        entity: string
        location: string
        expertise: string
        date: string
    }>
    proposals: Array<{
        id: number
        name: string
        entity: string
        location: string
        expertise: string
        date: string
        firm: string
    }>
    panelInformation: {
        hourly_fee: number
        currency: Currency
        type: "" | "Negotiated",
        attachments: Array<string>
        internal_correspondents: Array<string>
        terms_and_conditions: string,
        services_and_projects: string
    },
    amountOfFees: Array<{
        id: number
        year: number,
        cost_center: string,
        total_amount: string,
        law_firm: string

    }>


}