import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `

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

type Query {
  auteur(idAuteur: Int, nom: String, prenom: String, initiales: String, slug_auteur: String, email: String,
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
}

schema {
  query: Query
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
