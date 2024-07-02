
/**
 * A mission represents a contract and its dates the period of work.
 */
export interface Mission {
	since: Date;
	until: Date;
}

/**
 * A permit represents a document that allows to work during a period in France.
 */
export interface Permit {
	since: Date;
	until: Date;
}
