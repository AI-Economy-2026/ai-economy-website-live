export interface AppUser {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
}

export interface AppSession {
  token: string;
  user_id: string;
  expires_at: string;
}

export type ProductType =
  | "toolkit"
  | "membership"
  | "ask_sarah"
  | "start_right"
  | "bump_prompts"
  | "start_winning";

export interface AppSubscription {
  id: string;
  user_id: string;
  status: "active" | "cancelled" | "expired" | "inactive";
  product_type: ProductType;
  current_period_start: string | null;
  current_period_end: string | null;
}

export interface AuthUser extends AppUser {
  /** Primary subscription (first active) — kept for backward compatibility */
  subscription: {
    active: boolean;
    product_type: string | null;
  };
  /** All active product types for this user */
  owned_products: string[];
}
