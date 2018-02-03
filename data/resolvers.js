import { Sequelize,
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
  }
};

export default resolvers;
