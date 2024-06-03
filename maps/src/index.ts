/// <reference types="@types/google.maps" />
import {User} from "./User"
import { Company } from "./Company";

const user = new User();
user.info();

const company = new Company();
company.info();

new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom:12,
  center: { lat: 48.46764446564062, lng: 35.054582849243744}
});