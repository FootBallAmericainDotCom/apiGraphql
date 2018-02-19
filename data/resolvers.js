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
      return Auteur.findAll({ where: args });
    },
    category(_, args) {
      return Category.findAll({ where: args });
    },
    administratif(_, args) {
      return Administratif.findAll({ where: args });
    },
    blog(_, args) {
      return Blog.findAll({ where: args });
    },
    blog_auteur(_, args) {
      return Blog_auteur.findAll({ where: args });
    },
    blog_news_temp(_, args) {
      return Blog_news_temp.findAll({ where: args });
    },
    breakingnews(_, args) {
      return Breakingnews.findAll({ where: args });
    },
    championnat(_, args) {
      return Championnat.findAll({ where: args })
    },
    championnat_poule(_, args) {
      return Championnat_poule.findAll({ where: args })
    },
    citation(_, args) {
      return Citation.findAll({ where: args })
    },
    commentaire_captcha(_, args) {
     return Commentaire_captcha.findAll({ where: args })
    },
    competition(_, args) {
     return Competition.findAll({ where: args })
    },
    competition_groupe_equipe(_, args) {
     return Competition_groupe_equipe.findAll({ where: args })
    },
    conference(_, args) {
     return Conference.findAll({ where: args })
    },
    conference_division(_, args) {
     return Conference_division.findAll({ where: args })
    },
    connectes(_, args) {
     return Connectes.findAll({ where: args })
    },
    contact_message(_, args) {
     return Contact_message.findAll({ where: args })
    },
    division(_, args) {
     return Division.findAll({ where: args })
    },
    division_franchise(_, args) {
     return Division_franchise.findAll({ where: args })
    },
    dossier(_, args) {
     return Dossier.findAll({ where: args })
    },
    draft(_, args) {
     return Draft.findAll({ where: args })
    },
    matchs(_, args) {
      return Matchs.findAll({ where: args })
    },
    redaction(_, args) {
      return Redaction.findAll({ where: args })
    },
    franchise(_, args) {
     return Franchise.findAll({ where: args })
    },
    joueur(_, args) {
     return Joueur.findAll({ where: args })
    },
  }
};

export default resolvers;
