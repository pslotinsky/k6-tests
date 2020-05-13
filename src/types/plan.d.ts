export interface AdditionalPaymentDetails {
    discount?: number;
}

export interface PlanDataData {
    discount?: number;
}

export type PlanParams = {
    id: string,
    subscriptionId: string,
    data?: AdditionalPaymentDetails,
}

export interface PlanData {
    id: string;
    subscriptionId: string;
    data?: PlanDataData;
}

export interface OptimalPlanParams {
    subscriptionId: string;
    planId: string;
}

export interface OptimalPlanComputationResponse {
    plans: OptimalPlanParams[];
}

export interface OptimalPlanQuery {
    serviceId: string;
    entryId: string;
    ehrId: string;
    date: Date;
}
