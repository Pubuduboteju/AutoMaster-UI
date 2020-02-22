export interface Car {
  id: string;
  vehicleModel: string;
  vehicleMake: string;
  trim_edition: string;
  modelYear: Number;
  bodyType: string;
  engineCapacity: Number;
  transmission: string;
  fuelType: string;
  image: string;
}

export interface User{
  userName: String;
  firstName: String;
  lastName: String;
  phoneNo: Number;
  email: String;
  password: String;
}

export interface UserComments{
  userName: String;
  vehicleName: String;
  comment: String;
  vehicleRate:number;
  commentDate:String;

}

export interface UserCars{
  id: string;
  userName: string;
  vehicleModel: string;
  vehicleMake: string;
  modelYear: number;
  bodyType: string;
  engineCapacity: number;
  transmission: string;
  fuelType: string;
  chassisNumber: string;
  vehicleNumber: string;
  registeredYear: string;
  currentMileage: number;
  lastEngineOilChange: number;
  lastEngineOilFilterChange: number;
  lastGearOilChange: number;
  image: string;

}

export interface VehicleNews{
  id:string;
  title:string;
  subTitle:string;
  description:string;
  newsDate:Date;
  newsDateString:string;
  image: string;
}

export interface GeneralUserMessage{
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  subject:string;
  message:string;
  isReplied:boolean;
}

export interface ServiceStation{
  key:string;
  stationName:string;
  stationEmail:string;
  stationAddress:string;
  mainCity:string;
  stationPhoneNo:string;
  latitude:number;
  longitude:number;

}

export interface ServiceAppointment{
  id:string;
  firstName:string;
  userName:string;
  email:string;
  phoneNo:string;
  serviceRequired:string;
  otherDetails:string;
  senderEmail:string;
  emailType:string;

  stationName:string;
  stationEmail:string;
  stationAddress:string;
  stationPhoneNo:string;

}

export interface Dimensions{
  id:string;
  vehicleModel:string;
  length:string;
  width:string;
  seatingCapacity:string;
  grossVehicleWeight:string;
  cargoCapacity:string;
  fuelConsumption_city:string;
  fuelConsumption_highway:string;
  fuelConsumption_combined:string;
  horsePower:string;
  turningCircle:string;
  tyreSize:string;
  wheelSize:string;

}

export interface RecommendationInputs{
  id:String
  gender: String;
  job: String;
  ageGroup: String;
  monthlyIncome: String;
  noOfFamMembers:number;
  brandedPerson:number;
  howLongUseVehicle:number;
  considerMoneySpendOnFuel:number;
  avgKmsPerDriveMonth:number;
  petrolhead:number;
  considerResaleValue:number;
  whyUseCar:String;
}


