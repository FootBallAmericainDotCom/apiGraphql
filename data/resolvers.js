import { Sequelize,
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
  } from './connectors';

const resolvers = {
  Query: {
    auteur(_, args) {
      return Auteur.find({ where: args });
    },
    auteurs() {
      return Auteur.findAll();
    },
    category(_, args) {
      return Category.find({ where: args });
    },
    categorys() {
      return Category.findAll();
    },
    administratif(_, args) {
      return Administratif.find({ where: args });
    },
    administratifs() {
      return Administratif.findAll();
    },
    blog(_, args) {
      return Blog.find({ where: args });
    },
    blogs() {
      return Blog.findAll();
    },
    blog_auteur(_, args) {
      return Blog_auteur.find({ where: args });
    },
    blog_auteurs() {
      return Blog_auteur.findAll();
    },
    blog_news_temp(_, args) {
      return Blog_news_temp.find({ where: args });
    },
    blog_news_temps() {
      return Blog_news_temp.findAll();
    },
    breakingnews(_, args) {
      return Breakingnews.find({ where: args });
    },
    breakingnewss() {
      return Breakingnews.findAll();
    },
    championnat(_, args) {
      return Championnat.find({ where: args })
    },
    championnats() {
      return Championnat.findAll()
    },
    championnat_poule(_, args) {
      return Championnat_poule.find({ where: args })
    },
    championnat_poules() {
      return Championnat_poule.findAll()
    },
    citation(_, args) {
      return Citation.find({ where: args })
    },
    citations() {
      return Citation.findAll()
    },
    commentaire_captcha(_, args) {
     return Commentaire_captcha.find({ where: args })
    },
    commentaire_captchas() {
     return Commentaire_captcha.findAll()
    },
    competition(_, args) {
     return Competition.find({ where: args })
    },
    competitions() {
     return Competition.findAll()
    },
    competition_groupe_equipe(_, args) {
     return Competition_groupe_equipe.find({ where: args })
    },
    competition_groupe_equipes() {
     return Competition_groupe_equipe.findAll()
    },
    conference(_, args) {
     return Conference.find({ where: args })
    },
    conferences() {
     return Conference.findAll()
    },
    conference_division(_, args) {
     return Conference_division.find({ where: args })
    },
    conference_divisions() {
     return Conference_division.findAll()
    },
    connectes(_, args) {
     return Connectes.find({ where: args })
    },
    connectess() {
     return Connectes.findAll()
    },
    contact_message(_, args) {
     return Contact_message.find({ where: args })
    },
    contact_messages() {
     return Contact_message.findAll()
    },
    division(_, args) {
     return Division.find({ where: args })
    },
    divisions() {
     return Division.findAll()
    },
    division_franchise(_, args) {
     return Division_franchise.find({ where: args })
    },
    division_franchises() {
     return Division_franchise.findAll()
    },
    dossier(_, args) {
     return Dossier.find({ where: args })
    },
    dossiers() {
     return Dossier.findAll()
    },
    draft(_, args) {
     return Draft.find({ where: args })
    },
    drafts() {
     return Draft.findAll()
    },
    matchs(_, args) {
      return Matchs.find({ where: args })
    },
    matchss() {
      return Matchs.findAll()
    },
    redaction(_, args) {
      return Redaction.find({ where: args })
    },
    redactions() {
      return Redaction.findAll()
    },
    franchise(_, args) {
     return Franchise.find({ where: args })
    },
    franchises() {
     return Franchise.findAll()
    },
    joueur(_, args) {
     return Joueur.find({ where: args })
    },
    joueurs() {
     return Joueur.findAll()
    },
  }
};

export default resolvers;
