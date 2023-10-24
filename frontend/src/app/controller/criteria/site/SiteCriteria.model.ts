import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {SiteImageCriteria} from './SiteImageCriteria.model';
import {TechnicienCriteria} from '../collaborateur/TechnicienCriteria.model';
import {ModeAccesCriteria} from './ModeAccesCriteria.model';

export class SiteCriteria  extends BaseCriteria  {

    public id: number;
    public g2r: string;
    public g2rLike: string;
    public nom: string;
    public nomLike: string;
    public commentaire: string;
    public commentaireLike: string;
     public latitude: number;
     public latitudeMin: number;
     public latitudeMax: number;
     public longitude: number;
     public longitudeMin: number;
     public longitudeMax: number;
  public technicien: TechnicienCriteria ;
  public techniciens: Array<TechnicienCriteria> ;
  public modeAcces: ModeAccesCriteria ;
  public modeAccess: Array<ModeAccesCriteria> ;
      public siteImages: Array<SiteImageCriteria>;

}
