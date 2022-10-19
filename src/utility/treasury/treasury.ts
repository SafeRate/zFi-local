import moment from "moment";

export type TreasuryPrice = {
  cusip: string;
  type: string | null;
  rate: number;
  maturityDate: string;
  callDate: string | null;
  buy: number;
  sell: number;
  endOfDay: number;
};

export enum TreasuryFirstInterestPeriod {
  LONG = "Long",
  NORMAL = "Normal",
  SHORT = "Short",
}

export enum TreasuryInterestPaymentFrequency {
  ANNUAL = "Annual",
  NONE = "None",
  QUARTERLY = "Quarterly",
  SEMI_ANNUAL = "Semi-Annual",
}

export enum TreasuryAuctionFormat {
  MULTI_PRICE = "Multi-Price",
  PRICE_BASED = "Price-Based",
  SINGLE_PRICE = "Single-Price",
}

export enum TreasuryType {
  BILL = "Bill",
  BOND = "Bond",
  CMB = "CMB",
  FRN = "FRN",
  NOTE = "Note",
  TIPS = "TIPS",
}

export enum TreasurySecurityType {
  BILL = "Bill",
  BOND = "Bond",
  NOTE = "Note",
}

export enum TreasuryTerm {
  WEEK_04 = "4-Week",
  WEEK_08 = "8-Week",
  WEEK_13 = "13-Week",
  WEEK_26 = "26-Week",
  WEEK_52 = "52-Week",
  YEAR_02 = "2-Year",
  YEAR_03 = "3-Year",
  YEAR_04 = "4-Year",
  YEAR_05 = "5-Year",
  YEAR_07 = "7-Year",
  YEAR_10 = "10-Year",
  YEAR_15 = "15-Year",
  YEAR_20 = "20-Year",
  YEAR_30 = "30-Year",
}

export enum TreasurySecurityTermUnit {
  DAY = "Day",
  WEEK = "Week",
  MONTH = "Month",
  YEAR = "Year",
}

export type TreasurySecurityTerm = {
  period: TreasurySecurityTermUnit;
  number: number;
};

export type ISODateNoZ = string;
export type StringDecimal = string;
export type StringInt = string;
export type StringYesNo = string;

export type TreasurySecurityRaw = {
  cusip: string;
  issueDate: ISODateNoZ;
  securityType: TreasurySecurityType;
  securityTerm: string;
  maturityDate: ISODateNoZ;
  interestRate: StringDecimal;
  refCpiOnIssueDate: StringDecimal;
  refCpiOnDatedDate: StringDecimal;
  announcementDate: ISODateNoZ;
  auctionDate: ISODateNoZ;
  auctionDateYear: StringInt;
  datedDate: ISODateNoZ;
  accruedInterestPer1000: StringDecimal;
  accruedInterestPer100: StringDecimal;
  adjustedAccruedInterestPer1000: StringDecimal;
  adjustedPrice: StringDecimal;
  allocationPercentage: StringDecimal;
  allocationPercentageDecimals: StringInt;
  announcedCusip: string;
  auctionFormat: TreasuryAuctionFormat;
  averageMedianDiscountRate: StringDecimal;
  averageMedianInvestmentRate: StringDecimal;
  averageMedianPrice: StringDecimal;
  averageMedianDiscountMargin: StringDecimal;
  averageMedianYield: StringDecimal;
  backDated: StringYesNo;
  backDatedDate: ISODateNoZ;
  bidToCoverRatio: StringDecimal;
  callDate: ISODateNoZ;
  callable: StringYesNo;
  calledDate: ISODateNoZ;
  cashManagementBillCMB: StringYesNo;
  closingTimeCompetitive: string;
  closingTimeNoncompetitive: string;
  competitiveAccepted: StringInt;
  competitiveBidDecimals: StringInt;
  competitiveTendered: StringInt;
  competitiveTendersAccepted: StringYesNo;
  corpusCusip: string;
  cpiBaseReferencePeriod: string;
  currentlyOutstanding: StringInt;
  directBidderAccepted: StringInt;
  directBidderTendered: StringInt;
  estimatedAmountOfPubliclyHeldMaturingSecuritiesByType: StringInt;
  fimaIncluded: StringYesNo;
  fimaNoncompetitiveAccepted: StringInt;
  fimaNoncompetitiveTendered: StringInt;
  firstInterestPeriod: TreasuryFirstInterestPeriod;
  firstInterestPaymentDate: ISODateNoZ;
  floatingRate: StringYesNo;
  frnIndexDeterminationDate: ISODateNoZ;
  frnIndexDeterminationRate: StringDecimal;
  highDiscountRate: StringDecimal;
  highInvestmentRate: StringDecimal;
  highPrice: StringDecimal;
  highDiscountMargin: StringDecimal;
  highYield: StringDecimal;
  indexRatioOnIssueDate: StringDecimal;
  indirectBidderAccepted: StringInt;
  indirectBidderTendered: StringInt;
  interestPaymentFrequency: TreasuryInterestPaymentFrequency;
  lowDiscountRate: StringDecimal;
  lowInvestmentRate: StringDecimal;
  lowPrice: StringDecimal;
  lowDiscountMargin: StringDecimal;
  lowYield: StringDecimal;
  maturingDate: ISODateNoZ;
  maximumCompetitiveAward: StringInt;
  maximumNoncompetitiveAward: StringInt;
  maximumSingleBid: StringInt;
  minimumBidAmount: StringInt;
  minimumStripAmount: StringInt;
  minimumToIssue: StringInt;
  multiplesToBid: StringInt;
  multiplesToIssue: StringInt;
  nlpExclusionAmount: StringInt;
  nlpReportingThreshold: StringInt;
  noncompetitiveAccepted: StringInt;
  noncompetitiveTendersAccepted: StringYesNo;
  offeringAmount: StringInt;
  originalCusip: string;
  originalDatedDate: ISODateNoZ;
  originalIssueDate: ISODateNoZ;
  originalSecurityTerm: string;
  pdfFilenameAnnouncement: string;
  pdfFilenameCompetitiveResults: string;
  pdfFilenameNoncompetitiveResults: string;
  pdfFilenameSpecialAnnouncement: string;
  pricePer100: StringDecimal;
  primaryDealerAccepted: StringInt;
  primaryDealerTendered: StringInt;
  reopening: StringYesNo;
  securityTermDayMonth: string;
  securityTermWeekYear: string;
  series: string;
  somaAccepted: StringInt;
  somaHoldings: StringInt;
  somaIncluded: StringYesNo;
  somaTendered: StringInt;
  spread: "";
  standardInterestPaymentPer1000: StringDecimal;
  strippable: StringYesNo;
  term: TreasuryTerm;
  tiinConversionFactorPer1000: StringDecimal;
  tips: StringYesNo;
  totalAccepted: StringInt;
  totalTendered: StringInt;
  treasuryDirectAccepted: StringInt;
  treasuryDirectTendersAccepted: StringYesNo;
  type: TreasuryType;
  unadjustedAccruedInterestPer1000: StringDecimal;
  unadjustedPrice: StringDecimal;
  updatedTimestamp: ISODateNoZ;
  xmlFilenameAnnouncement: string;
  xmlFilenameCompetitiveResults: string;
  xmlFilenameSpecialAnnouncement: string;
  tintCusip1: string;
  tintCusip2: string;
};

export type TreasurySecurity = {
  cusip: string;
  issueDate: ISODateNoZ;
  securityType: TreasurySecurityType;
  securityTerm: string;
  securityTermUnit: TreasurySecurityTermUnit;
  securityTermNumber: number;
  maturityDate: ISODateNoZ;
  interestRate: number;
  refCpiOnIssueDate: number;
  refCpiOnDatedDate: number;
  announcementDate: ISODateNoZ;
  auctionDate: ISODateNoZ;
  auctionDateYear: number;
  datedDate: ISODateNoZ;
  accruedInterestPer1000: number;
  accruedInterestPer100: number;
  adjustedAccruedInterestPer1000: number;
  adjustedPrice: number;
  allocationPercentage: number;
  allocationPercentageDecimals: number;
  announcedCusip: string;
  auctionFormat: TreasuryAuctionFormat;
  averageMedianDiscountRate: number;
  averageMedianInvestmentRate: number;
  averageMedianPrice: number;
  averageMedianDiscountMargin: number;
  averageMedianYield: number;
  backDated: boolean;
  backDatedDate: ISODateNoZ;
  bidToCoverRatio: number;
  callDate: ISODateNoZ;
  callable: boolean;
  calledDate: ISODateNoZ;
  cashManagementBillCMB: boolean;
  closingTimeCompetitive: string;
  closingTimeNoncompetitive: string;
  competitiveAccepted: number;
  competitiveBidDecimals: number;
  competitiveTendered: number;
  competitiveTendersAccepted: boolean;
  corpusCusip: string;
  cpiBaseReferencePeriod: string;
  currentlyOutstanding: number;
  directBidderAccepted: number;
  directBidderTendered: number;
  estimatedAmountOfPubliclyHeldMaturingSecuritiesByType: number;
  fimaIncluded: boolean;
  fimaNoncompetitiveAccepted: number;
  fimaNoncompetitiveTendered: number;
  firstInterestPeriod: TreasuryFirstInterestPeriod;
  firstInterestPaymentDate: ISODateNoZ;
  floatingRate: boolean;
  frnIndexDeterminationDate: ISODateNoZ;
  frnIndexDeterminationRate: number;
  highDiscountRate: number;
  highInvestmentRate: number;
  highPrice: number;
  highDiscountMargin: number;
  highYield: number;
  indexRatioOnIssueDate: number;
  indirectBidderAccepted: number;
  indirectBidderTendered: number;
  interestPaymentFrequency: TreasuryInterestPaymentFrequency;
  lowDiscountRate: number;
  lowInvestmentRate: number;
  lowPrice: number;
  lowDiscountMargin: number;
  lowYield: number;
  maturingDate: ISODateNoZ;
  maximumCompetitiveAward: number;
  maximumNoncompetitiveAward: number;
  maximumSingleBid: number;
  minimumBidAmount: number;
  minimumStripAmount: number;
  minimumToIssue: number;
  multiplesToBid: number;
  multiplesToIssue: number;
  nlpExclusionAmount: number;
  nlpReportingThreshold: number;
  noncompetitiveAccepted: number;
  noncompetitiveTendersAccepted: boolean;
  offeringAmount: number;
  originalCusip: string;
  originalDatedDate: ISODateNoZ;
  originalIssueDate: ISODateNoZ;
  originalSecurityTerm: string;
  originalSecurityTermUnit: TreasurySecurityTermUnit;
  originalSecurityTermNumber: number;
  pdfFilenameAnnouncement: string;
  pdfFilenameCompetitiveResults: string;
  pdfFilenameNoncompetitiveResults: string;
  pdfFilenameSpecialAnnouncement: string;
  pricePer100: number;
  primaryDealerAccepted: number;
  primaryDealerTendered: number;
  reopening: boolean;
  securityTermDayMonth: string;
  securityTermWeekYear: string;
  series: string;
  somaAccepted: number;
  somaHoldings: number;
  somaIncluded: boolean;
  somaTendered: number;
  spread: number;
  standardInterestPaymentPer1000: number;
  strippable: boolean;
  term: TreasuryTerm;
  termNumber: number;
  termUnit: TreasurySecurityTermUnit;
  tiinConversionFactorPer1000: number;
  tips: boolean;
  totalAccepted: number;
  totalTendered: number;
  treasuryDirectAccepted: number;
  treasuryDirectTendersAccepted: boolean;
  type: TreasuryType;
  unadjustedAccruedInterestPer1000: number;
  unadjustedPrice: number;
  updatedTimestamp: ISODateNoZ;
  xmlFilenameAnnouncement: string;
  xmlFilenameCompetitiveResults: string;
  xmlFilenameSpecialAnnouncement: string;
  tintCusip1: string;
  tintCusip2: string;
};

const parseTreasuryString = (value: string): string | null => {
  if (typeof value === "string" && value !== "") {
    return value;
  } else {
    return null;
  }
};

const parseTreasuryFirstInterestPeriod = (
  value: string
): TreasuryFirstInterestPeriod | null => {
  value = parseTreasuryString(value);
  if (value) {
    value = value.toLowerCase();
    if (value === TreasuryFirstInterestPeriod.LONG.toLowerCase()) {
      return TreasuryFirstInterestPeriod.LONG;
    } else if (value === TreasuryFirstInterestPeriod.SHORT.toLowerCase()) {
      return TreasuryFirstInterestPeriod.SHORT;
    } else if (value === TreasuryFirstInterestPeriod.NORMAL.toLowerCase()) {
      return TreasuryFirstInterestPeriod.NORMAL;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasuryInterestPaymentFrequency = (
  value: string
): TreasuryInterestPaymentFrequency | null => {
  value = parseTreasuryString(value);
  if (value) {
    value = value.toLowerCase();
    if (value === TreasuryInterestPaymentFrequency.ANNUAL.toLowerCase()) {
      return TreasuryInterestPaymentFrequency.ANNUAL;
    } else if (value === TreasuryInterestPaymentFrequency.NONE.toLowerCase()) {
      return TreasuryInterestPaymentFrequency.NONE;
    } else if (
      value === TreasuryInterestPaymentFrequency.QUARTERLY.toLowerCase()
    ) {
      return TreasuryInterestPaymentFrequency.QUARTERLY;
    } else if (
      value === TreasuryInterestPaymentFrequency.SEMI_ANNUAL.toLowerCase()
    ) {
      return TreasuryInterestPaymentFrequency.SEMI_ANNUAL;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasuryAuctionFormat = (
  value: string
): TreasuryAuctionFormat | null => {
  value = parseTreasuryString(value);
  if (value) {
    value = value.toLowerCase();
    if (value === TreasuryAuctionFormat.MULTI_PRICE.toLowerCase()) {
      return TreasuryAuctionFormat.MULTI_PRICE;
    } else if (value === TreasuryAuctionFormat.PRICE_BASED.toLowerCase()) {
      return TreasuryAuctionFormat.PRICE_BASED;
    } else if (value === TreasuryAuctionFormat.SINGLE_PRICE.toLowerCase()) {
      return TreasuryAuctionFormat.SINGLE_PRICE;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasuryType = (value: string): TreasuryType | null => {
  value = parseTreasuryString(value);
  if (value) {
    value = value.toLowerCase();
    if (value === TreasuryType.BILL.toLowerCase()) {
      return TreasuryType.BILL;
    } else if (value === TreasuryType.BOND.toLowerCase()) {
      return TreasuryType.BOND;
    } else if (value === TreasuryType.CMB.toLowerCase()) {
      return TreasuryType.CMB;
    } else if (value === TreasuryType.FRN.toLowerCase()) {
      return TreasuryType.FRN;
    } else if (value === TreasuryType.NOTE.toLowerCase()) {
      return TreasuryType.NOTE;
    } else if (value === TreasuryType.TIPS.toLowerCase()) {
      return TreasuryType.TIPS;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasurySecurityType = (
  value: string
): TreasurySecurityType | null => {
  value = parseTreasuryString(value);
  if (value) {
    value = value.toLowerCase();
    if (value === TreasurySecurityType.BILL.toLowerCase()) {
      return TreasurySecurityType.BILL;
    } else if (value === TreasurySecurityType.BOND.toLowerCase()) {
      return TreasurySecurityType.BOND;
    } else if (value === TreasurySecurityType.NOTE.toLowerCase()) {
      return TreasurySecurityType.NOTE;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasuryTerm = (value: string): TreasuryTerm | null => {
  value = parseTreasuryString(value);
  if (value) {
    value = value.toLowerCase();
    if (value === TreasuryTerm.WEEK_04.toLowerCase()) {
      return TreasuryTerm.WEEK_04;
    } else if (value === TreasuryTerm.WEEK_08.toLowerCase()) {
      return TreasuryTerm.WEEK_08;
    } else if (value === TreasuryTerm.WEEK_13.toLowerCase()) {
      return TreasuryTerm.WEEK_13;
    } else if (value === TreasuryTerm.WEEK_26.toLowerCase()) {
      return TreasuryTerm.WEEK_26;
    } else if (value === TreasuryTerm.WEEK_52.toLowerCase()) {
      return TreasuryTerm.WEEK_52;
    } else if (value === TreasuryTerm.YEAR_02.toLowerCase()) {
      return TreasuryTerm.YEAR_02;
    } else if (value === TreasuryTerm.YEAR_03.toLowerCase()) {
      return TreasuryTerm.YEAR_03;
    } else if (value === TreasuryTerm.YEAR_04.toLowerCase()) {
      return TreasuryTerm.YEAR_04;
    } else if (value === TreasuryTerm.YEAR_05.toLowerCase()) {
      return TreasuryTerm.YEAR_05;
    } else if (value === TreasuryTerm.YEAR_07.toLowerCase()) {
      return TreasuryTerm.YEAR_07;
    } else if (value === TreasuryTerm.YEAR_10.toLowerCase()) {
      return TreasuryTerm.YEAR_10;
    } else if (value === TreasuryTerm.YEAR_15.toLowerCase()) {
      return TreasuryTerm.YEAR_15;
    } else if (value === TreasuryTerm.YEAR_20.toLowerCase()) {
      return TreasuryTerm.YEAR_20;
    } else if (value === TreasuryTerm.YEAR_30.toLowerCase()) {
      return TreasuryTerm.YEAR_30;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasuryDecimal = (value: StringDecimal): number | null => {
  value = parseTreasuryString(value);
  if (value) {
    try {
      const numberValue = parseFloat(value);
      if (isNaN(numberValue)) {
        return null;
      } else {
        return numberValue;
      }
    } catch {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasuryInt = (value: StringInt): number | null => {
  value = parseTreasuryString(value);
  if (value) {
    try {
      const numberValue = parseInt(value);
      if (isNaN(numberValue)) {
        return null;
      } else {
        return numberValue;
      }
    } catch {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasuryYesNo = (value: StringYesNo): boolean | null => {
  value = parseTreasuryString(value);
  if (value) {
    if (value.toLowerCase() === "yes") {
      return true;
    } else if (value.toLowerCase() === "no") {
      return false;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseISODateNoZ = (value: ISODateNoZ): ISODateNoZ | null => {
  value = parseTreasuryString(value);
  if (value) {
    let dateValue = moment(value, "MM-DD-YYYYTHH:mm:ss");
    if (dateValue.isValid()) {
      return value;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasurySecurityTermUnit = (
  value: string
): TreasurySecurityTermUnit | null => {
  value = parseTreasuryString(value);
  if (value) {
    const values = value.split("-");
    if (Array.isArray(values) && values.length === 2) {
      const unitValue = values[1].toLowerCase();
      if (unitValue === TreasurySecurityTermUnit.DAY.toLowerCase()) {
        return TreasurySecurityTermUnit.DAY;
      } else if (unitValue === TreasurySecurityTermUnit.WEEK.toLowerCase()) {
        return TreasurySecurityTermUnit.WEEK;
      } else if (unitValue === TreasurySecurityTermUnit.MONTH.toLowerCase()) {
        return TreasurySecurityTermUnit.MONTH;
      } else if (unitValue === TreasurySecurityTermUnit.YEAR.toLowerCase()) {
        return TreasurySecurityTermUnit.YEAR;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const parseTreasurySecurityTermNumber = (value: string): number | null => {
  value = parseTreasuryString(value);
  if (value) {
    const values = value.split("-");
    if (Array.isArray(values) && values.length === 2) {
      const numberValue = parseInt(values[0]);
      if (isNaN(numberValue)) {
        return null;
      } else {
        return numberValue;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const getTreasurySecurityFromTreasurySecurityRaw = (
  treasurySecurityRaw: TreasurySecurityRaw
): TreasurySecurity => {
  let treasurySecurity: TreasurySecurity = {
    cusip: parseTreasuryString(treasurySecurityRaw.cusip),
    issueDate: parseISODateNoZ(treasurySecurityRaw.issueDate),
    securityType: parseTreasurySecurityType(treasurySecurityRaw.securityType),
    securityTerm: parseTreasuryString(treasurySecurityRaw.securityTerm),
    securityTermUnit: parseTreasurySecurityTermUnit(
      treasurySecurityRaw.securityTerm
    ),
    securityTermNumber: parseTreasurySecurityTermNumber(
      treasurySecurityRaw.securityTerm
    ),
    maturityDate: parseISODateNoZ(treasurySecurityRaw.maturityDate),
    interestRate: parseTreasuryDecimal(treasurySecurityRaw.interestRate),
    refCpiOnIssueDate: parseTreasuryDecimal(
      treasurySecurityRaw.refCpiOnIssueDate
    ),
    refCpiOnDatedDate: parseTreasuryDecimal(
      treasurySecurityRaw.refCpiOnDatedDate
    ),
    announcementDate: parseISODateNoZ(treasurySecurityRaw.announcementDate),
    auctionDate: parseISODateNoZ(treasurySecurityRaw.auctionDate),
    auctionDateYear: parseTreasuryInt(treasurySecurityRaw.auctionDateYear),
    datedDate: parseISODateNoZ(treasurySecurityRaw.datedDate),
    accruedInterestPer1000: parseTreasuryDecimal(
      treasurySecurityRaw.accruedInterestPer1000
    ),
    accruedInterestPer100: parseTreasuryDecimal(
      treasurySecurityRaw.accruedInterestPer100
    ),
    adjustedAccruedInterestPer1000: parseTreasuryDecimal(
      treasurySecurityRaw.adjustedAccruedInterestPer1000
    ),
    adjustedPrice: parseTreasuryDecimal(treasurySecurityRaw.adjustedPrice),
    allocationPercentage: parseTreasuryDecimal(
      treasurySecurityRaw.adjustedPrice
    ),
    allocationPercentageDecimals: parseTreasuryInt(
      treasurySecurityRaw.adjustedPrice
    ),
    announcedCusip: parseTreasuryString(treasurySecurityRaw.announcedCusip),
    auctionFormat: parseTreasuryAuctionFormat(
      treasurySecurityRaw.auctionFormat
    ),
    averageMedianDiscountRate: parseTreasuryDecimal(
      treasurySecurityRaw.adjustedPrice
    ),
    averageMedianInvestmentRate: parseTreasuryDecimal(
      treasurySecurityRaw.averageMedianInvestmentRate
    ),
    averageMedianPrice: parseTreasuryDecimal(
      treasurySecurityRaw.averageMedianPrice
    ),
    averageMedianDiscountMargin: parseTreasuryDecimal(
      treasurySecurityRaw.averageMedianDiscountMargin
    ),
    averageMedianYield: parseTreasuryDecimal(
      treasurySecurityRaw.averageMedianYield
    ),
    backDated: parseTreasuryYesNo(treasurySecurityRaw.backDated),
    backDatedDate: parseISODateNoZ(treasurySecurityRaw.backDatedDate),
    bidToCoverRatio: parseTreasuryDecimal(treasurySecurityRaw.bidToCoverRatio),
    callDate: parseISODateNoZ(treasurySecurityRaw.callDate),
    callable: parseTreasuryYesNo(treasurySecurityRaw.callable),
    calledDate: parseISODateNoZ(treasurySecurityRaw.calledDate),
    cashManagementBillCMB: parseTreasuryYesNo(
      treasurySecurityRaw.cashManagementBillCMB
    ),
    closingTimeCompetitive: parseTreasuryString(
      treasurySecurityRaw.closingTimeCompetitive
    ),
    closingTimeNoncompetitive: parseTreasuryString(
      treasurySecurityRaw.closingTimeNoncompetitive
    ),
    competitiveAccepted: parseTreasuryInt(
      treasurySecurityRaw.competitiveAccepted
    ),
    competitiveBidDecimals: parseTreasuryInt(
      treasurySecurityRaw.competitiveBidDecimals
    ),
    competitiveTendered: parseTreasuryInt(
      treasurySecurityRaw.competitiveTendered
    ),
    competitiveTendersAccepted: parseTreasuryYesNo(
      treasurySecurityRaw.competitiveTendersAccepted
    ),
    corpusCusip: parseTreasuryString(treasurySecurityRaw.corpusCusip),
    cpiBaseReferencePeriod: parseTreasuryString(
      treasurySecurityRaw.cpiBaseReferencePeriod
    ),
    currentlyOutstanding: parseTreasuryInt(
      treasurySecurityRaw.currentlyOutstanding
    ),
    directBidderAccepted: parseTreasuryInt(
      treasurySecurityRaw.directBidderAccepted
    ),
    directBidderTendered: parseTreasuryInt(
      treasurySecurityRaw.directBidderTendered
    ),
    estimatedAmountOfPubliclyHeldMaturingSecuritiesByType: parseTreasuryInt(
      treasurySecurityRaw.estimatedAmountOfPubliclyHeldMaturingSecuritiesByType
    ),
    fimaIncluded: parseTreasuryYesNo(treasurySecurityRaw.fimaIncluded),
    fimaNoncompetitiveAccepted: parseTreasuryInt(
      treasurySecurityRaw.fimaNoncompetitiveAccepted
    ),
    fimaNoncompetitiveTendered: parseTreasuryInt(
      treasurySecurityRaw.fimaNoncompetitiveTendered
    ),
    firstInterestPeriod: parseTreasuryFirstInterestPeriod(
      treasurySecurityRaw.firstInterestPeriod
    ),
    firstInterestPaymentDate: parseISODateNoZ(
      treasurySecurityRaw.firstInterestPaymentDate
    ),
    floatingRate: parseTreasuryYesNo(treasurySecurityRaw.floatingRate),
    frnIndexDeterminationDate: parseISODateNoZ(
      treasurySecurityRaw.frnIndexDeterminationDate
    ),
    frnIndexDeterminationRate: parseTreasuryDecimal(
      treasurySecurityRaw.frnIndexDeterminationRate
    ),
    highDiscountRate: parseTreasuryDecimal(
      treasurySecurityRaw.highDiscountRate
    ),
    highInvestmentRate: parseTreasuryDecimal(
      treasurySecurityRaw.highInvestmentRate
    ),
    highPrice: parseTreasuryDecimal(treasurySecurityRaw.highPrice),
    highDiscountMargin: parseTreasuryDecimal(
      treasurySecurityRaw.highDiscountMargin
    ),
    highYield: parseTreasuryDecimal(treasurySecurityRaw.highYield),
    indexRatioOnIssueDate: parseTreasuryDecimal(
      treasurySecurityRaw.indexRatioOnIssueDate
    ),
    indirectBidderAccepted: parseTreasuryInt(
      treasurySecurityRaw.indirectBidderAccepted
    ),
    indirectBidderTendered: parseTreasuryInt(
      treasurySecurityRaw.indirectBidderTendered
    ),
    interestPaymentFrequency: parseTreasuryInterestPaymentFrequency(
      treasurySecurityRaw.interestPaymentFrequency
    ),
    lowDiscountRate: parseTreasuryDecimal(treasurySecurityRaw.lowDiscountRate),
    lowInvestmentRate: parseTreasuryDecimal(
      treasurySecurityRaw.lowInvestmentRate
    ),
    lowPrice: parseTreasuryDecimal(treasurySecurityRaw.lowPrice),
    lowDiscountMargin: parseTreasuryDecimal(
      treasurySecurityRaw.lowDiscountMargin
    ),
    lowYield: parseTreasuryDecimal(treasurySecurityRaw.lowYield),
    maturingDate: parseISODateNoZ(treasurySecurityRaw.maturingDate),
    maximumCompetitiveAward: parseTreasuryInt(
      treasurySecurityRaw.maximumCompetitiveAward
    ),
    maximumNoncompetitiveAward: parseTreasuryInt(
      treasurySecurityRaw.maximumNoncompetitiveAward
    ),
    maximumSingleBid: parseTreasuryInt(treasurySecurityRaw.maximumSingleBid),
    minimumBidAmount: parseTreasuryInt(treasurySecurityRaw.minimumBidAmount),
    minimumStripAmount: parseTreasuryInt(
      treasurySecurityRaw.minimumStripAmount
    ),
    minimumToIssue: parseTreasuryInt(treasurySecurityRaw.minimumToIssue),
    multiplesToBid: parseTreasuryInt(treasurySecurityRaw.multiplesToBid),
    multiplesToIssue: parseTreasuryInt(treasurySecurityRaw.multiplesToIssue),
    nlpExclusionAmount: parseTreasuryInt(
      treasurySecurityRaw.nlpExclusionAmount
    ),
    nlpReportingThreshold: parseTreasuryInt(
      treasurySecurityRaw.nlpReportingThreshold
    ),
    noncompetitiveAccepted: parseTreasuryInt(
      treasurySecurityRaw.noncompetitiveAccepted
    ),
    noncompetitiveTendersAccepted: parseTreasuryYesNo(
      treasurySecurityRaw.noncompetitiveTendersAccepted
    ),
    offeringAmount: parseTreasuryInt(treasurySecurityRaw.offeringAmount),
    originalCusip: parseTreasuryString(treasurySecurityRaw.originalCusip),
    originalDatedDate: parseISODateNoZ(treasurySecurityRaw.originalDatedDate),
    originalIssueDate: parseISODateNoZ(treasurySecurityRaw.originalIssueDate),
    originalSecurityTerm: parseTreasuryString(
      treasurySecurityRaw.originalSecurityTerm
    ),
    originalSecurityTermUnit: parseTreasurySecurityTermUnit(
      treasurySecurityRaw.originalSecurityTerm
    ),
    originalSecurityTermNumber: parseTreasurySecurityTermNumber(
      treasurySecurityRaw.originalSecurityTerm
    ),
    pdfFilenameAnnouncement: parseTreasuryString(
      treasurySecurityRaw.pdfFilenameAnnouncement
    ),
    pdfFilenameCompetitiveResults: parseTreasuryString(
      treasurySecurityRaw.pdfFilenameCompetitiveResults
    ),
    pdfFilenameNoncompetitiveResults: parseTreasuryString(
      treasurySecurityRaw.pdfFilenameNoncompetitiveResults
    ),
    pdfFilenameSpecialAnnouncement: parseTreasuryString(
      treasurySecurityRaw.pdfFilenameSpecialAnnouncement
    ),
    pricePer100: parseTreasuryDecimal(treasurySecurityRaw.pricePer100),
    primaryDealerAccepted: parseTreasuryInt(
      treasurySecurityRaw.primaryDealerAccepted
    ),
    primaryDealerTendered: parseTreasuryInt(
      treasurySecurityRaw.primaryDealerTendered
    ),
    reopening: parseTreasuryYesNo(treasurySecurityRaw.reopening),
    securityTermDayMonth: parseTreasuryString(
      treasurySecurityRaw.securityTermDayMonth
    ),
    securityTermWeekYear: parseTreasuryString(
      treasurySecurityRaw.securityTermWeekYear
    ),
    series: parseTreasuryString(treasurySecurityRaw.series),
    somaAccepted: parseTreasuryInt(treasurySecurityRaw.somaAccepted),
    somaHoldings: parseTreasuryInt(treasurySecurityRaw.somaHoldings),
    somaIncluded: parseTreasuryYesNo(treasurySecurityRaw.somaIncluded),
    somaTendered: parseTreasuryInt(treasurySecurityRaw.somaTendered),
    spread: parseTreasuryDecimal(treasurySecurityRaw.spread),
    standardInterestPaymentPer1000: parseTreasuryDecimal(
      treasurySecurityRaw.standardInterestPaymentPer1000
    ),
    strippable: parseTreasuryYesNo(treasurySecurityRaw.strippable),
    term: parseTreasuryTerm(treasurySecurityRaw.term),
    termNumber: parseTreasurySecurityTermNumber(treasurySecurityRaw.term),
    termUnit: parseTreasurySecurityTermUnit(treasurySecurityRaw.term),
    tiinConversionFactorPer1000: parseTreasuryDecimal(
      treasurySecurityRaw.totalAccepted
    ),
    tips: parseTreasuryYesNo(treasurySecurityRaw.tips),
    totalAccepted: parseTreasuryInt(treasurySecurityRaw.totalAccepted),
    totalTendered: parseTreasuryInt(treasurySecurityRaw.totalTendered),
    treasuryDirectAccepted: parseTreasuryInt(
      treasurySecurityRaw.treasuryDirectAccepted
    ),
    treasuryDirectTendersAccepted: parseTreasuryYesNo(
      treasurySecurityRaw.treasuryDirectTendersAccepted
    ),
    type: parseTreasuryType(treasurySecurityRaw.type),
    unadjustedAccruedInterestPer1000: parseTreasuryDecimal(
      treasurySecurityRaw.unadjustedAccruedInterestPer1000
    ),
    unadjustedPrice: parseTreasuryDecimal(treasurySecurityRaw.unadjustedPrice),
    updatedTimestamp: parseISODateNoZ(treasurySecurityRaw.updatedTimestamp),
    xmlFilenameAnnouncement: parseTreasuryString(
      treasurySecurityRaw.xmlFilenameAnnouncement
    ),
    xmlFilenameCompetitiveResults: parseTreasuryString(
      treasurySecurityRaw.xmlFilenameCompetitiveResults
    ),
    xmlFilenameSpecialAnnouncement: parseTreasuryString(
      treasurySecurityRaw.xmlFilenameSpecialAnnouncement
    ),
    tintCusip1: parseTreasuryString(treasurySecurityRaw.tintCusip1),
    tintCusip2: parseTreasuryString(treasurySecurityRaw.tintCusip2),
  };

  return treasurySecurity;
};

export const getTreasuryFromPricesFormat = function (values: string[]) {
  let treasury: TreasuryPrice = {
    cusip: "",
    type: "",
    rate: 0,
    maturityDate: "",
    callDate: "",
    buy: 0,
    sell: 0,
    endOfDay: 0,
  };

  // CUSIP
  if (values[0]) {
    treasury.cusip = values[0];
  }

  // TYPE
  if (values[1]) {
    treasury.type = values[1];
  }

  // RATE
  if (values[2]) {
    let rate = parseFloat(values[2]);
    if (!isNaN(rate)) {
      treasury.rate = rate;
    }
  }

  // MATURITY DATE
  if (values[3]) {
    let date = values[3].split("/");
    if (date.length === 3) {
      treasury.maturityDate = `${date[2]}-${date[0]}-${date[1]}`;
    }
  }

  // CALL DATE
  if (values[4]) {
    let date = values[4].split("/");
    if (date.length === 3) {
      treasury.callDate = `${date[2]}-${date[0]}-${date[1]}`;
    }
  }

  // BUY
  if (values[5]) {
    let buy = parseFloat(values[5]);
    if (!isNaN(buy)) {
      treasury.buy = buy;
    }
  }

  // SELL
  if (values[5]) {
    let sell = parseFloat(values[5]);
    if (!isNaN(sell)) {
      treasury.sell = sell;
    }
  }

  // END OF DAY
  // SELL
  if (values[6]) {
    let endOfDay = parseFloat(values[5]);
    if (!isNaN(endOfDay)) {
      treasury.endOfDay = endOfDay;
    }
  }

  return treasury;
};
