import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
scalar Date

type Auteur {
  idAuteur: Int!
  idMembre: Int
  nom: String!
  prenom: String!
  initiales: String!
  slug_auteur: String
  email: String
  annee: String
  role: String
  description: String
  actif: Int!
}

type Administratif {
  idAdmin: Int!
  libAdmin: String!
}

type Blog {
  idBlog: Int!
  nomBlog: String!
  urlBlog: String!
  urlBlogFeed: String!
  feedComplet: Int!
  contentNotComplete: String
  descriptionBlog: String
  nbArticlesDispos: Int
  nbArticlesRecup: Int
  dateDernierRecup: String
  accord: Int!
}

type Blog_auteur {
  idBlog: Int!
  idAuteur: Int!
  nomAuteurBlog: String!
}

type Blog_news_temp {
  cle: Int!
  dat: String!
  publication: String
  auteur: String!
  titre: String!
  urlpost: String
  contenu: String!
  cleaned: String
  section: Int
  auteurid: Int
  convertInNews: Int!
}

type Breakingnews {
  idRedaction: Int!
  ts: Int!
}

type Category {
  idCategory: Int!
  libCategory: String!
}

type Championnat {
  idChampionnat: Int!
  libChampionnat: String!
  idLigue: Int!
}

type Championnat_poule {
  idPoule: Int!
  idChampionnat: Int!
  libPoule: String!
}

type Citation {
  idCitation: Int!
  citation: String!
  citationVo: String
  commentaire: String!
  auteur: String
  vote: Int!
  reelle: Int!
}

type Commentaire_captcha {
 idCmt: Int!
 questionCmt: String!
 reponseCmt: String!
}

type Competition {
 idCompetition: Int!
 slug_competition: String
 ligue: Int!
 championnat: Int
 saison: Int!
 current_week: Int!
 current_poz_week: Int!
 libCompetition: String
 active: Int!
}

type Competition_groupe_equipe {
 idCompetition: Int!
 idGroupe: String
 idEquipe: Int!
}

type Conference {
 idConf: Int!
 conf: String!
 conf_long: String!
}

type Conference_division {
 idConference: Int!
 idDiv: Int!
}

type Connectes {
 idUser: Int!
 timeinsec: Int!
}

type Contact_message {
 idMsg: Int!
 nomMsg: String!
 emailMsg: String!
 sitewebMsg: String
 ipMsg: String!
 objetMsg: String
 messageMsg: String!
 timestampMsg: Int!
}

type Division {
 idDiv: Int!
 division: String!
}

type Division_franchise {
 idDiv: Int!
 idFranchise: Int!
}

type Dossier {
 idDossier: Int!
 idSection: Int!
 page: Int!
 position: Int
 dossierIdSection: Int
 idRedaction: Int
 pageCible: Int
 page_cible_slug: String
}

type Draft {
 idDraft: Int!
 libDraft: String!
}

type Matchs {
  idMatch: Int!
  idCompetition: Int!
  typeMatch: Int
  dateMatch: String!
  heureMatch: String!
  journee: Int!
  idUsFootDom: Int!
  idUsFootExt: Int!
  qt1_d: Int
  qt2_d: Int
  qt3_d: Int
  qt4_d: Int
  qt5_d: Int
  score_d: Int
  qt1_e: Int
  qt2_e: Int
  qt3_e: Int
  qt4_e: Int
  qt5_e: Int
  score_e: Int
  lieux: Int
}

type Redaction {
  idRedaction: Int!
  type: Int!
  titre1: String!
  slug: String
  titre2: String
  corps: String!
  auteur: Int!
  trackback: Int!
  editable: Int!
  publication: String!
  maj: String
  suppression: String
  online: Int!
  online_before: Int!
  lu: Int!
  is_news: Int!
  idMainImage: Int
  commentaireImage: String
  blog_id: Int
  has_script: Int!
}

type Franchise {
 idUsfoot: Int!
 typeFranchise: Int!
 idLigue: Int
 franchise: String
 franchise2: String
 acronyme: String
 meilleurperf: String
 franchiseadd: String
 anciennom: String
 numretire: String
 siteofficiel: String
 contact: String
 adresse_stade: String
 poule: Int
 headcoach: String
 president: String
 activites: String
 fluxrss: String
 facebooknom: String
 facebookid: String
 twitterid: String
 twitterfan: String
 espnId: Int
}

type Joueur {
 idJoueur: String!
 idImport: String
 srcImport: String
 nomPrenomJoueur: String
 nomJoueur: String!
 prenomJoueur: String!
 dateNaisJoueur: String
 tailleJoueur: Int
 poidsJoueur: Int
 collegeJoueur: String
 experience: String
 draft: String
 draftTour: Int
 draftChoix: Int
 draftFranchise: String
 slugJoueur: String
 urlImport: String
 alternate_name: String
 lastUpdate: String
 complet: Int!
 idNFL: Int
}

type Query {
  auteur(idAuteur: Int, idMembre: Int, nom: String, prenom: String, initiales: String, slug_auteur: String, email: String,
    annee: String, role: String, description: String, actif: Int): Auteur
  auteurs: [Auteur]

  category(idCategory: Int, libCategory: String): Category
  categorys: [Category]

  administratif(idAdmin: Int, libAdmin: String): Administratif
  administratifs: [Administratif]

  blog(idBlog: Int, nomBlog: String, urlBlog: String, urlBlogFeed: String,
    feedComplet: Int, contentNotComplete: String, descriptionBlog: String,
    nbArticlesDispos: Int, nbArticlesRecup: Int, dateDernierRecup: String, accord: Int): Blog
  blogs: [Blog]

  blog_auteur(idBlog: Int, idAuteur: Int, nomAuteurBlog: String): Blog_auteur
  blog_auteurs: [Blog_auteur]

  blog_news_temp(cle: Int, dat: String, publication: String, auteur: String, titre: String,
    urlpost: String, contenu: String, section: Int, auteurid: Int, convertInNews: Int): Blog_news_temp
  blog_news_temps: [Blog_news_temp]

  breakingnews(idRedaction: Int, ts: Int): Breakingnews
  breakingnewss: [Breakingnews]

  championnat(idChampionnat: Int, libChampionnat: String, idLigue: Int): Championnat
  championnats: [Championnat]

  championnat_poule(idPoule: Int, idChampionnat: Int, libPoule: String): Championnat_poule
  championnat_poules: [Championnat_poule]

  citation(idCitation: Int, citation: String, citationVo: String, commentaire: String,
  auteur: String, vote: Int, reelle: Int): Citation
  citations: [Citation]

  commentaire_captcha(idCmt: Int, questionCmt: String, reponseCmt: String): Commentaire_captcha
  commentaire_captchas: [Commentaire_captcha]

  competition(idCompetition: Int, slug_competition: String, ligue: Int, championnat: Int, saison: Int, current_week: Int, current_poz_week: Int, libCompetition: String, active: Int): Competition
  competitions: [Competition]

  competition_groupe_equipe(idCompetition: Int, idGroupe: String, idEquipe: Int): Competition_groupe_equipe
  competition_groupe_equipes: [Competition_groupe_equipe]

  conference(idConf: Int, conf: String, conf_long: String): Conference
  conferences: [Conference]

  conference_division(idConference: Int, idDiv: Int): Conference_division
  conference_divisions: [Conference_division]

  connectes(idUser: Int, timeinsec: Int): Connectes
  connectess: [Connectes]

  contact_message(idMsg: Int, nomMsg: String, emailMsg: String, sitewebMsg: String, ipMsg: String, objetMsg: String, messageMsg: String, timestampMsg: Int): Contact_message
  contact_messages: [Contact_message]

  division(idDiv: Int, division: String): Division
  divisions: [Division]

  division_franchise(idDiv: Int, idFranchise: Int): Division_franchise
  division_franchises: [Division_franchise]

  dossier(idDossier: Int, idSection: Int, page: Int, position: Int, dossierIdSection: Int, idRedaction: Int, pageCible: Int, page_cible_slug: String): Dossier
  dossiers: [Dossier]

  draft(idDraft: Int, libDraft: String): Draft
  drafts: [Draft]

  matchs(idMatch: Int, idCompetition: Int, typeMatch: Int, dateMatch: String, heureMatch: String,
  journee: Int, idUsFootDom: Int, idUsFootExt: Int, qt1_d: Int, qt2_d: Int, qt3_d: Int, qt4_d: Int, qt5_d: Int,
  score_d: Int, qt1_e: Int, qt2_e: Int, qt3_e: Int, qt4_e: Int, qt5_e: Int, score_e: Int, lieux: Int): Matchs
  matchss: [Matchs]

  redaction(idRedaction: Int, type: Int, titre1: String, slug: String, titre2: String,
  corps: String, auteur: Int, trackback: Int, editable: Int, publication: String,
  maj: String, suppression: String, online: Int, online_before: Int, lu: Int, is_news: Int,
  idMainImage: Int, commentaireImage: String, blog_id: Int, has_script: Int): [Redaction]
  redactions: [Redaction]

  franchise(idUsfoot: Int, typeFranchise: Int, idLigue: Int, franchise: String, franchise2: String, acronyme: String, meilleurperf: String, franchiseadd: String, anciennom: String, numretire: String, siteofficiel: String, contact: String, adresse_stade: String, poule: Int, headcoach: String, president: String, activites: String, fluxrss: String, facebooknom: String, facebookid: String, twitterid: String, twitterfan: String, espnId: Int): Franchise
  franchises: [Franchise]

  joueur(idJoueur: String, idImport: String, srcImport: String, nomPrenomJoueur: String, nomJoueur: String, prenomJoueur: String, dateNaisJoueur: String, tailleJoueur: Int, poidsJoueur: Int, collegeJoueur: String, experience: String, draft: String, draftTour: Int, draftChoix: Int, draftFranchise: String, slugJoueur: String, urlImport: String, alternate_name: String, lastUpdate: String, complet: Int, idNFL: Int): Joueur
  joueurs: [Joueur]

}

schema {
  query: Query
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
