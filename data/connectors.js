import Sequelize from 'sequelize';
import _ from 'lodash';

const config = require('../config');
const env = process.env.NODE_ENV || 'development';

var host = 'localhost';
var dbName = 'dblite3';
var username = 'root';
var password = 'root';
var port = '8889';

if (env == 'development') {
  console.log("Env development");
} else if (env == 'production') {
  console.log("Env production");
  host = config.host;
  dbName = config.name;
  username = config.username;
  port = config.port;
  password = config.password;
}

const db = new Sequelize(dbName, username, password, {
  host: host,
  dialect: 'mysql',
  user     : username,
  password : password,
  port: port,
  //logging: false
});

const AuteurModel = db.define('auteur', {
  idAuteur: { type: Sequelize.INTEGER.UNSIGNED, primaryKey: true},
  idMembre: { type: Sequelize.INTEGER },
  nom: { type: Sequelize.STRING },
  prenom: { type: Sequelize.STRING },
  initiales: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  annee: { type: Sequelize.STRING },
  role: { type: Sequelize.STRING },
  description: { type: Sequelize.TEXT },
  actif: { type: Sequelize.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});

const CategoryModel = db.define('category', {
  idCategory: { type: Sequelize.INTEGER, primaryKey: true},
  libCategory: { type: Sequelize.STRING },
}, {
  timestamps: false,
  freezeTableName: true,
});

const AdministratifModel = db.define('administratif', {
  idAdmin: { type: Sequelize.INTEGER, primaryKey: true},
  libAdmin: { type: Sequelize.STRING },
}, {
  timestamps: false,
  freezeTableName: true,
});

const BlogModel = db.define('blog', {
  idBlog: { type: Sequelize.INTEGER, primaryKey: true},
  nomBlog: { type: Sequelize.STRING },
  urlBlog: { type: Sequelize.STRING },
  urlBlogFeed: { type: Sequelize.STRING },
  feedComplet: { type: Sequelize.INTEGER },
  contentNotComplete: { type: Sequelize.STRING },
  descriptionBlog: { type: Sequelize.STRING },
  nbArticlesDispos: { type: Sequelize.INTEGER },
  nbArticlesRecup: { type: Sequelize.INTEGER },
  dateDernierRecup: { type: Sequelize.STRING },
  accord: { type: Sequelize.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});

const Blog_auteurModel = db.define('blog_auteur', {
  idBlog: { type: Sequelize.INTEGER, primaryKey: true},
  idAuteur: { type: Sequelize.INTEGER },
  nomAuteurBlog: { type: Sequelize.STRING },
}, {
  timestamps: false,
  freezeTableName: true,
});

const Blog_news_tempModel = db.define('blog_news_temp', {
  cle: { type: Sequelize.INTEGER, primaryKey: true},
  dat: { type: Sequelize.STRING },
  publication: { type: Sequelize.DATE },
  auteur: { type: Sequelize.STRING },
  titre: { type: Sequelize.STRING },
  urlpost: { type: Sequelize.STRING },
  contenu: { type: Sequelize.TEXT },
  cleaned: { type: Sequelize.TEXT },
  section: { type: Sequelize.INTEGER },
  auteurid: { type: Sequelize.INTEGER },
  convertInNews: { type: Sequelize.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});

const BreakingnewsModel = db.define('breakingnews', {
  idRedaction: { type: Sequelize.INTEGER.UNSIGNED, primaryKey: true},
  ts: { type: Sequelize.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});

const ChampionnatModel = db.define('championnat', {
  idChampionnat: { type: Sequelize.INTEGER, primaryKey: true},
  libChampionnat: { type: Sequelize.STRING },
  idLigue: { type: Sequelize.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});

const Championnat_pouleModel = db.define('championnat_poule', {
  idPoule: { type: Sequelize.INTEGER, primaryKey: true},
  idChampionnat: { type: Sequelize.INTEGER },
  libPoule: { type: Sequelize.STRING },
}, {
  timestamps: false,
  freezeTableName: true,
});

const CitationModel = db.define('citation', {
  idCitation: { type: Sequelize.INTEGER.UNSIGNED, primaryKey: true},
  citation: { type: Sequelize.STRING },
  citationVo: { type: Sequelize.STRING },
  commentaire: { type: Sequelize.STRING },
  auteur: { type: Sequelize.STRING },
  vote: { type: Sequelize.INTEGER },
  reelle: { type: Sequelize.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});

const Commentaire_captchaModel = db.define('commentaire_captcha', {
 idCmt: { type: Sequelize.INTEGER, primaryKey: true },
 questionCmt: { type: Sequelize.STRING },
 reponseCmt: { type: Sequelize.STRING },
}, {
 timestamps: false,
 freezeTableName: true,
});

const CompetitionModel = db.define('competition', {
 idCompetition: { type: Sequelize.INTEGER, primaryKey: true },
 slug_competition: { type: Sequelize.STRING },
 ligue: { type: Sequelize.INTEGER },
 championnat: { type: Sequelize.INTEGER },
 saison: { type: Sequelize.INTEGER },
 current_week: { type: Sequelize.INTEGER },
 current_poz_week: { type: Sequelize.INTEGER },
 libCompetition: { type: Sequelize.STRING },
 active: { type: Sequelize.INTEGER },
}, {
 timestamps: false,
 freezeTableName: true,
});

const Competition_groupe_equipeModel = db.define('competition_groupe_equipe', {
 idCompetition: { type: Sequelize.INTEGER, primaryKey: true },
 idGroupe: { type: Sequelize.STRING },
 idEquipe: { type: Sequelize.INTEGER },
}, {
 timestamps: false,
 freezeTableName: true,
});

const ConferenceModel = db.define('conference', {
 idConf: { type: Sequelize.INTEGER, primaryKey: true },
 conf: { type: Sequelize.STRING },
 conf_long: { type: Sequelize.STRING },
}, {
 timestamps: false,
 freezeTableName: true,
});

const Conference_divisionModel = db.define('conference_division', {
 idConference: { type: Sequelize.INTEGER, primaryKey: true },
 idDiv: { type: Sequelize.INTEGER },
}, {
 timestamps: false,
 freezeTableName: true,
});

const ConnectesModel = db.define('connectes', {
 idUser: { type: Sequelize.INTEGER, primaryKey: true },
 timeinsec: { type: Sequelize.INTEGER },
}, {
 timestamps: false,
 freezeTableName: true,
});

const Contact_messageModel = db.define('contact_message', {
 idMsg: { type: Sequelize.INTEGER, primaryKey: true },
 nomMsg: { type: Sequelize.STRING },
 emailMsg: { type: Sequelize.STRING },
 sitewebMsg: { type: Sequelize.STRING },
 ipMsg: { type: Sequelize.STRING },
 objetMsg: { type: Sequelize.STRING },
 messageMsg: { type: Sequelize.STRING },
 timestampMsg: { type: Sequelize.INTEGER },
}, {
 timestamps: false,
 freezeTableName: true,
});

const DivisionModel = db.define('division', {
 idDiv: { type: Sequelize.INTEGER, primaryKey: true },
 division: { type: Sequelize.STRING },
}, {
 timestamps: false,
 freezeTableName: true,
});

const Division_franchiseModel = db.define('division_franchise', {
 idDiv: { type: Sequelize.INTEGER, primaryKey: true },
 idFranchise: { type: Sequelize.INTEGER },
}, {
 timestamps: false,
 freezeTableName: true,
});

const DossierModel = db.define('dossier', {
 idDossier: { type: Sequelize.INTEGER, primaryKey: true },
 idSection: { type: Sequelize.INTEGER },
 page: { type: Sequelize.INTEGER },
 position: { type: Sequelize.INTEGER },
 dossierIdSection: { type: Sequelize.INTEGER },
 idRedaction: { type: Sequelize.INTEGER },
 pageCible: { type: Sequelize.INTEGER },
 page_cible_slug: { type: Sequelize.STRING },
}, {
 timestamps: false,
 freezeTableName: true,
});

const DraftModel = db.define('draft', {
 idDraft: { type: Sequelize.INTEGER, primaryKey: true },
 libDraft: { type: Sequelize.STRING },
}, {
 timestamps: false,
 freezeTableName: true,
});

const MatchsModel = db.define('matchs', {
  idMatch: { type: Sequelize.INTEGER, primaryKey: true },
  idCompetition: { type: Sequelize.INTEGER },
  typeMatch: { type: Sequelize.INTEGER },
  dateMatch: { type: Sequelize.STRING },
  heureMatch: { type: Sequelize.STRING },
  journee: { type: Sequelize.INTEGER },
  idUsFootDom: { type: Sequelize.INTEGER },
  idUsFootExt: { type: Sequelize.INTEGER },
  qt1_d: { type: Sequelize.INTEGER },
  qt2_d: { type: Sequelize.INTEGER },
  qt3_d: { type: Sequelize.INTEGER },
  qt4_d: { type: Sequelize.INTEGER },
  qt5_d: { type: Sequelize.INTEGER },
  score_d: { type: Sequelize.INTEGER },
  qt1_e: { type: Sequelize.INTEGER },
  qt2_e: { type: Sequelize.INTEGER },
  qt3_e: { type: Sequelize.INTEGER },
  qt4_e: { type: Sequelize.INTEGER },
  qt5_e: { type: Sequelize.INTEGER },
  score_e: { type: Sequelize.INTEGER },
  lieux: { type: Sequelize.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});

const ReadactionModel = db.define('redaction', {
  idRedaction: { type: Sequelize.INTEGER, primaryKey: true},
  type: { type: Sequelize.INTEGER },
  titre1: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
  titre2: { type: Sequelize.STRING },
  corps: { type: Sequelize.STRING },
  auteur: { type: Sequelize.INTEGER },
  trackback: { type: Sequelize.INTEGER },
  editable: { type: Sequelize.INTEGER },
  publication: { type: Sequelize.STRING },
  maj: { type: Sequelize.STRING },
  suppression: { type: Sequelize.STRING },
  online: { type: Sequelize.INTEGER },
  online_before: { type: Sequelize.INTEGER },
  lu: { type: Sequelize.INTEGER },
  is_news: { type: Sequelize.INTEGER },
  idMainImage: { type: Sequelize.INTEGER.UNSIGNED },
  commentaireImage: { type: Sequelize.STRING },
  blog_id: { type: Sequelize.INTEGER },
  has_script: { type: Sequelize.INTEGER }
}, {
  timestamps: false,
  freezeTableName: true,
});

const FranchiseModel = db.define('franchise', {
 idUsfoot: { type: Sequelize.INTEGER, primaryKey: true},
 typeFranchise: { type: Sequelize.INTEGER },
 idLigue: { type: Sequelize.INTEGER },
 franchise: { type: Sequelize.STRING },
 franchise2: { type: Sequelize.STRING },
 acronyme: { type: Sequelize.STRING },
 meilleurperf: { type: Sequelize.STRING },
 franchiseadd: { type: Sequelize.STRING },
 anciennom: { type: Sequelize.STRING },
 numretire: { type: Sequelize.STRING },
 siteofficiel: { type: Sequelize.STRING },
 contact: { type: Sequelize.STRING },
 adresse_stade: { type: Sequelize.STRING },
 poule: { type: Sequelize.INTEGER.UNSIGNED },
 headcoach: { type: Sequelize.STRING },
 president: { type: Sequelize.STRING },
 activites: { type: Sequelize.STRING },
 fluxrss: { type: Sequelize.STRING },
 facebooknom: { type: Sequelize.STRING },
 facebookid: { type: Sequelize.STRING },
 twitterid: { type: Sequelize.STRING },
 twitterfan: { type: Sequelize.STRING },
 espnId: { type: Sequelize.INTEGER },
}, {
 timestamps: false,
 freezeTableName: true,
});

const JoueurModel = db.define('joueur', {
 idJoueur: { type: Sequelize.STRING, primaryKey: true},
 idImport: { type: Sequelize.STRING },
 srcImport: { type: Sequelize.STRING },
 nomPrenomJoueur: { type: Sequelize.STRING },
 nomJoueur: { type: Sequelize.STRING },
 prenomJoueur: { type: Sequelize.STRING },
 dateNaisJoueur: { type: Sequelize.STRING },
 tailleJoueur: { type: Sequelize.INTEGER.UNSIGNED },
 poidsJoueur: { type: Sequelize.INTEGER.UNSIGNED },
 collegeJoueur: { type: Sequelize.STRING },
 experience: { type: Sequelize.STRING },
 draft: { type: Sequelize.STRING },
 draftTour: { type: Sequelize.INTEGER },
 draftChoix: { type: Sequelize.INTEGER },
 draftFranchise: { type: Sequelize.STRING },
 slugJoueur: { type: Sequelize.STRING },
 urlImport: { type: Sequelize.STRING },
 alternate_name: { type: Sequelize.STRING },
 lastUpdate: { type: Sequelize.STRING },
 complet: { type: Sequelize.INTEGER },
 idNFL: { type: Sequelize.INTEGER.UNSIGNED },
}, {
 timestamps: false,
 freezeTableName: true,
});

const Auteur = db.models.auteur;
const Category = db.models.category;
const Administratif = db.models.administratif;
const Blog = db.models.blog;
const Blog_auteur = db.models.blog_auteur;
const Blog_news_temp = db.models.blog_news_temp;
const Breakingnews = db.models.breakingnews;
const Championnat = db.models.championnat;
const Championnat_poule = db.models.championnat_poule;
const Citation = db.models.citation;
const Commentaire_captcha = db.models.commentaire_captcha;
const Competition = db.models.competition;
const Competition_groupe_equipe = db.models.competition_groupe_equipe;
const Conference = db.models.conference;
const Conference_division = db.models.conference_division;
const Connectes = db.models.connectes;
const Contact_message = db.models.contact_message;
const Division = db.models.division;
const Division_franchise = db.models.division_franchise;
const Dossier = db.models.dossier;
const Draft = db.models.draft;
const Matchs = db.models.matchs;
const Redaction = db.models.redaction;
const Franchise = db.models.franchise;
const Joueur = db.models.joueur;

export { Sequelize,
  Auteur,
  Category,
  Administratif,
  Blog, Blog_auteur, Blog_news_temp,
  Breakingnews,
  Championnat,
  Championnat_poule,
  Citation,
  Commentaire_captcha,
  Competition,
  Competition_groupe_equipe,
  Conference,
  Conference_division,
  Connectes,
  Contact_message,
  Division,
  Division_franchise,
  Dossier,
  Draft,
  Matchs,
  Redaction,
  Franchise,
  Joueur
};
