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

  const config = require('../config');
  var mysql = require('mysql');

  const con = mysql.createConnection({
	  host: config.host,
	  user: config.username,
	  password: config.password,
		database: "football",
		port: config.port
	});

  // const con = mysql.createConnection({
	//   host: "localhost",
	//   user: "root",
	//   password: "root",
	// 	database: "dblite3",
	// 	port: "8889"
	// });

  con.connect(function(err) {
	  if (err) {
			console.log(err);
			return ;
		}
    console.log("Connection database successful");
		return ;
	});
  // con.connect(function(err) {
	//   if (err) {
	// 		logger("error", "Connection database failed");
	// 		console.log(err);
	// 		callback();
	// 		return ;
	// 	}
	// 	logger("info", "Connection database successful");
	// 	callback();
	// 	return ;
	// });

const resolvers = {
  Query: {
    auteur(_, args) {
      var getDate = new Date();
      var values = [{
        query: "auteur",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });
      return Auteur.findAll({ where: args });
    },
    category(_, args) {
      var getDate = new Date();
      var values = [{
        query: "category",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Category.findAll({ where: args });
    },
    administratif(_, args) {
      var getDate = new Date();
      var values = [{
        query: "administratif",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Administratif.findAll({ where: args });
    },
    blog(_, args) {
      var getDate = new Date();
      var values = [{
        query: "blog",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Blog.findAll({ where: args });
    },
    blog_auteur(_, args) {
      var getDate = new Date();
      var values = [{
        query: "blog_auteur",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Blog_auteur.findAll({ where: args });
    },
    blog_news_temp(_, args) {
      var getDate = new Date();
      var values = [{
        query: "blog_news_temp",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Blog_news_temp.findAll({ where: args });
    },
    breakingnews(_, args) {
      var getDate = new Date();
      var values = [{
        query: "breakingnews",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Breakingnews.findAll({ where: args });
    },
    championnat(_, args) {
      var getDate = new Date();
      var values = [{
        query: "championnat",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Championnat.findAll({ where: args })
    },
    championnat_poule(_, args) {
      var getDate = new Date();
      var values = [{
        query: "championnat_poule",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Championnat_poule.findAll({ where: args })
    },
    citation(_, args) {
      var getDate = new Date();
      var values = [{
        query: "citation",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Citation.findAll({ where: args })
    },
    commentaire_captcha(_, args) {
      var getDate = new Date();
      var values = [{
        query: "commentaire_captcha",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Commentaire_captcha.findAll({ where: args })
    },
    competition(_, args) {
      var getDate = new Date();
      var values = [{
        query: "competition",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Competition.findAll({ where: args })
    },
    competition_groupe_equipe(_, args) {
      var getDate = new Date();
      var values = [{
        query: "competition_groupe_equipe",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Competition_groupe_equipe.findAll({ where: args })
    },
    conference(_, args) {
      var getDate = new Date();
      var values = [{
        query: "conference",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Conference.findAll({ where: args })
    },
    conference_division(_, args) {
      var getDate = new Date();
      var values = [{
        query: "conference_division",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Conference_division.findAll({ where: args })
    },
    connectes(_, args) {
      var getDate = new Date();
      var values = [{
        query: "connectes",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Connectes.findAll({ where: args })
    },
    contact_message(_, args) {
      var getDate = new Date();
      var values = [{
        query: "contact_message",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Contact_message.findAll({ where: args })
    },
    division(_, args) {
      var getDate = new Date();
      var values = [{
        query: "division",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Division.findAll({ where: args })
    },
    division_franchise(_, args) {
      var getDate = new Date();
      var values = [{
        query: "division_franchise",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Division_franchise.findAll({ where: args })
    },
    dossier(_, args) {
      var getDate = new Date();
      var values = [{
        query: "dossier",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Dossier.findAll({ where: args })
    },
    draft(_, args) {
      var getDate = new Date();
      var values = [{
        query: "draft",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Draft.findAll({ where: args })
    },
    matchs(_, args) {
      var getDate = new Date();
      var values = [{
        query: "matchs",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Matchs.findAll({ where: args })
    },
    redaction(_, args) {
      var getDate = new Date();
      var values = [{
        query: "redaction",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

      return Redaction.findAll({ where: args })
    },
    franchise(_, args) {
      var getDate = new Date();
      var values = [{
        query: "franchise",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Franchise.findAll({ where: args })
    },
    joueur(_, args) {
      var getDate = new Date();
      var values = [{
        query: "joueur",
        date: getDate
      }];
      con.query('INSERT INTO grafana SET ?', values, (err, res) => {
      if(err) throw err;
      });

     return Joueur.findAll({ where: args })
    },
  }
};

export default resolvers;
