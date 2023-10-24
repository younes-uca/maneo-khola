import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TechnicienAdminService} from 'src/app/controller/service/admin/collaborateur/TechnicienAdmin.service';
import {TechnicienDto} from 'src/app/controller/model/collaborateur/Technicien.model';
import {TechnicienCriteria} from 'src/app/controller/criteria/collaborateur/TechnicienCriteria.model';
@Component({
  selector: 'app-technicien-create-admin',
  templateUrl: './technicien-create-admin.component.html'
})
export class TechnicienCreateAdminComponent extends AbstractCreateController<TechnicienDto, TechnicienCriteria, TechnicienAdminService>  implements OnInit {



   private _validTechnicienNom = true;
   private _validTechnicienPrenom = true;

    constructor( private technicienService: TechnicienAdminService ) {
        super(technicienService);
    }

    ngOnInit(): void {
    }





    public setValidation(value: boolean){
        this.validTechnicienNom = value;
        this.validTechnicienPrenom = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTechnicienNom();
        this.validateTechnicienPrenom();
    }

    public validateTechnicienNom(){
        if (this.stringUtilService.isEmpty(this.item.nom)) {
        this.errorMessages.push('Nom non valide');
        this.validTechnicienNom = false;
        } else {
            this.validTechnicienNom = true;
        }
    }
    public validateTechnicienPrenom(){
        if (this.stringUtilService.isEmpty(this.item.prenom)) {
        this.errorMessages.push('Prenom non valide');
        this.validTechnicienPrenom = false;
        } else {
            this.validTechnicienPrenom = true;
        }
    }






    get validTechnicienNom(): boolean {
        return this._validTechnicienNom;
    }

    set validTechnicienNom(value: boolean) {
         this._validTechnicienNom = value;
    }
    get validTechnicienPrenom(): boolean {
        return this._validTechnicienPrenom;
    }

    set validTechnicienPrenom(value: boolean) {
         this._validTechnicienPrenom = value;
    }



}
