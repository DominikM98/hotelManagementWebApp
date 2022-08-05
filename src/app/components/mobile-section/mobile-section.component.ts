import {Component, OnInit} from "@angular/core";
import {MobileSectionService} from "./mobile-section.service";

@Component({
    selector: 'mobile-section',
    templateUrl: './mobile-section.component.html',
    providers: [MobileSectionService],
    styleUrls: ['./mobile-section.component.scss']
})
export class MobileSectionComponent implements OnInit {

    Facilities:any [] = [];
    Departaments:any[] = [];
    MoreInfoDept:any[] = [];
    CompanyData: any[] = [];
    AddressCompany: any[] = [];

    lengthMoreInfoDept = 0 ;

    _id = 0;
    description = '';
    facilities = '';
    departaments = '';
    departaments2 = '';
    newPersonName = '';
    newPersonPhone = 0;
    newPersonEmail = '';
    nameCompany = '';
    streetCompany = '';
    cityCompany = '';
    postcodeCompany = '';
    countryCompany = '';
    faxCompany = 0;
    phoneNumberCompany = 0;
    emailCompany = '';
    nipCompany = '';
    regonCompany = 0;
    disabledAdd = false;
    disabledDelete = false;

    isFacilities = true;
    isNewData = false;

    constructor(private mobileSectionService: MobileSectionService) { }

    ngOnInit(): void {
        this.getDataAboutHotel();
        this.checkExistsDept();
        this.lengthMoreInfoDept = this.MoreInfoDept.length;
    }

    getDataAboutHotel() {
        this.mobileSectionService.getHotelsData()
            .subscribe((data) => {
                this._id = data[0]._id;
                this.description = data[0].description;
                this.Facilities = data[0].facilities;
                this.Departaments = data[0].contact_with_dept;
                this.nameCompany = data[0].company_data[0].name_company;
                this.streetCompany = data[0].company_data[0].$address_company[0].$street_and_number;
                this.cityCompany = data[0].company_data[0].$address_company[0].$city;
                this.postcodeCompany = data[0].company_data[0].$address_company[0].$postcode;
                this.countryCompany = data[0].company_data[0].$address_company[0].$country;
                this.phoneNumberCompany = data[0].company_data[0].phone_number;
                this.faxCompany = data[0].company_data[0].fax_number;
                this.emailCompany = data[0].company_data[0].email_address;
                this.nipCompany = data[0].company_data[0].NIP;
                this.regonCompany = data[0].company_data[0].REGON;
            });
    }

    addMoreConvenience(){
        let convenience = this.Facilities.find(r => r.$name_convenience == this.facilities);

        if(convenience){
            this.isFacilities = false;
        }else{
            this.isFacilities = true;
            this.Facilities.push({
                $name_convenience: this.facilities
            })
        }

        this.facilities = '';
    }

    chooseDept(){
        this.checkExistsDept();
        this.MoreInfoDept.length = 0;
        let dept = this.Departaments.find(d => d.$dept_name == this.departaments);
        if(this.MoreInfoDept.length === 0){
            for (let i = 0; i < dept.$more_info.length; i++){
                this.MoreInfoDept.push({
                    $person_name: dept.$more_info[i].$person_name,
                    $phone_number: dept.$more_info[i].$phone_number,
                    $email_address: dept.$more_info[i].$email_address
                });
            }
        }else{
            this.MoreInfoDept = [];
        }

    }

    checkExistsDept(){
        let dept = this.Departaments.find(d => d.$dept_name == this.departaments);
        if (this.departaments === null){
            this.disabledAdd = false;
            this.disabledDelete = false;
        }else if (this.departaments === dept.$dept_name){
            this.disabledAdd = true;
            this.disabledDelete = false;
            if (this.lengthMoreInfoDept < this.MoreInfoDept.length){
                this.disabledDelete = true;
            }else{
                this.disabledDelete = false;
            }
        }
    }

    addMoreInfo(){
        this.isNewData = true;
        this.checkExistsDept()
    }

    addNewMoreInfo(){
        let dept = this.Departaments.find(d => d.$dept_name == this.departaments);
        let i = this.Departaments.indexOf(dept);

        this.Departaments[i].$more_info.push({
            $person_name: this.newPersonName,
            $phone_number: this.newPersonPhone,
            $email_address: this.newPersonEmail
        });

        this.newPersonName = '';
        this.newPersonPhone = 0;
        this.newPersonEmail = '';
    }

    addDepartament(){
        this.Departaments.push({
            $dept_name:this.departaments2,
            $more_info: []
        });

        this.departaments2 = '';
    }

    deleteConvenience(index: any){
        if (index !== -1) {
            this.Facilities.splice(index, 1);
        }
    }

    deleteNewMoreInfo(index: any){
        let dept = this.Departaments.find(d => d.$dept_name == this.departaments);
        let i = this.Departaments.indexOf(dept);

        if (index !== -1) {
            this.Departaments[i].$more_info.splice(index, 1);
        }
    }

    deleteMoreInfo(){
        this.isNewData = false;

        this.checkExistsDept()
    }

    deleteDepartament(){
        let dept = this.Departaments.find(d => d.$dept_name == this.departaments);
        let i = this.Departaments.indexOf(dept);

        if (i !== -1) {
            this.Departaments.splice(i, 1);
        }
    }

    saveDataCompany(){
        this.AddressCompany.push({
            $street_and_number: this.streetCompany,
            $city: this.cityCompany,
            $postcode: this.postcodeCompany,
            $country: this.countryCompany
        });

        this.CompanyData.push({
            name_company: this.nameCompany,
            $address_company: this.AddressCompany,
            phone_number: this.phoneNumberCompany,
            fax_number: this.faxCompany,
            email_address: this.emailCompany,
            NIP: this.nipCompany,
            REGON: this.regonCompany
        });
    }

    updateData(){
        this.saveDataCompany();
        const newData = {
            _id: this._id,
            description: this.description,
            facilities: this.Facilities,
            contact_with_dept: this.Departaments,
            company_data: this.CompanyData
        };

        this.mobileSectionService.updateHotelsData(newData).subscribe();
    }

    headElementsHotelData = ['Name convenience', 'Operation']

}