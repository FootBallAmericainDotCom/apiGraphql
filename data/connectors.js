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
  idAuteur: { type: Sequelize.INTEGER, primaryKey: true},
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
  idRedaction: { type: Sequelize.INTEGER, primaryKey: true},
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
  idCitation: { type: Sequelize.INTEGER, primaryKey: true},
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

const MatchsModel = db.define('matchs', {
  idMatch: { type: Sequelize.INTEGER, primaryKey: true},
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
  idMainImage: { type: Sequelize.INTEGER },
  commentaireImage: { type: Sequelize.STRING },
  blog_id: { type: Sequelize.INTEGER },
  has_script: { type: Sequelize.INTEGER }
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
const Matchs = db.models.matchs;
const Redaction = db.models.redaction;

export { Sequelize,
  Auteur,
  Category,
  Administratif,
  Blog, Blog_auteur, Blog_news_temp,
  Breakingnews,
  Championnat,
  Championnat_poule,
  Citation,
  Matchs,
  Redaction
};
