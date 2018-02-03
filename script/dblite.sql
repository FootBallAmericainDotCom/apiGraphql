-- phpMyAdmin SQL Dump
-- version 4.1.14.8
-- http://www.phpmyadmin.net
--
-- Client :  db708631853.db.1and1.com
-- Généré le :  Lun 15 Janvier 2018 à 11:40
-- Version du serveur :  5.5.58-0+deb7u1-log
-- Version de PHP :  5.4.45-0+deb7u11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `db708631853`
--

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE IF NOT EXISTS `auteur` (
  `idAuteur` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `idMembre` int(11) DEFAULT NULL COMMENT 'de table ''membre''',
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `initiales` varchar(3) NOT NULL,
  `slug_auteur` varchar(50) DEFAULT NULL COMMENT 'si null le lien pointera sur la-redaction',
  `email` varchar(50) DEFAULT NULL,
  `annee` year(4) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `description` text,
  `actif` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idAuteur`),
  UNIQUE KEY `slug_auteur` (`slug_auteur`),
  UNIQUE KEY `idMembre` (`idMembre`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Contenu de la table `auteur`
--

INSERT INTO `auteur` (`idAuteur`, `idMembre`, `nom`, `prenom`, `initiales`, `slug_auteur`, `email`, `annee`, `role`, `description`, `actif`) VALUES
(1, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, 2),
(2, 1, 'Flores', 'Pierre-François', 'PFF', 'pierre-francois-flores', 'webmaster@footballamericain.com', 1998, 'Président Association UsFoot NetworK, créateur footballamericain.com, webmaster, rédacteur', '<p>Passionné par le foot US depuis l''âge de 12 ans et la fameuse saison 1987, c''est en 1998 que j''ai décidé de monter une page perso parlant de notre sport favori.</p>\r\n<p>Petit à petit, le contenu s''est étoffé et 1999 est une année clé dans la naissance du site avec l''achat du nom de domaine <b>footballamericain.com</b>.</p>\r\n<p>L''année 2004 marque un tournant important puisqu''avec Olivier Montausier, nous décidons de nous unir et de créer une association à but non lucratif : l''<b>Association UsFoot Network</b> voit le jour en août 2004.</p>\r\n<p>Depuis, de nombreuses personnes nous ont rejoints et vous êtes de plus en plus nombreux à nous suivre.</p>\r\n<p>Nous espérons sincèrement que le travail effectué depuis 1998 vous donne autant de plaisir que nous en prenons à le faire.</p>\r\n<p>Merci pour votre fidélité !</p>', 1),
(3, 6, 'Brulefert', 'Christophe', 'CB', 'christophe-brulefert', 'christophe9210@hotmail.fr', 2003, 'Rédacteur, fan des Eagles', '<p>Christophe est l''un des plus anciens membres de l''Association puisqu''il nous a rejoint dès 2003.</p>\r\n<p>Depuis, il a contribué sans cesse à la rédaction avec une petite préférence pour la NFC Est, division de ses favoris, les Eagles de Philadelphie.</p>\r\n<p>Il est actuellement le principal contributeur des Quick Matchs.</p>', 0),
(4, 9999, 'Cabella', 'Roberto', 'RC', 'roberto-cabella', 'robertocabella@gmail.com', 2002, 'Spécialiste des Dolphins et par conséquent de l''AFC Est', '<p>Salut à tous,</p>\r\n<p>Roberto, fan de foot US depuis les 80''s, supporter inconditionnel des Dolphins de Miami (Dan the Man forever) et membre de la team depuis 7 ans.</p>  \r\n<p>Comme on peut le voir sur ma photo, je suis aussi un supporter de la Juventus, mais chut, faut pas le dire car ça n''est pas du foot US... Et aussi de l''ASNL, allez Nancy, mais encore une fois, chuuuuut !</p>\r\n<p>BONNE SAISON A TOUTES ET A TOUS et VIVE LA NFL !!!!!</p>', 0),
(5, 2, 'Depaepe', 'Thomas', 'TD', 'thomas-depaepe', 'thomasd30@hotmail.com', 2006, 'Rédacteur, fan des Steelers', '<p>Rédacteur sur le site depuis la saison 2006, je suis un simple passion de foot-us qui souhaite faire partager sa vision d’un sport qui rythme (comme pas mal d’entre nous) 4-5 mois de ma vie chaque année.<p>\r\n<p>J’ai découvert le foot us dans les années 90, avant d’adhérer définitivement à la « Steelers Nation » au tournant du siècle (Tommy Maddox, Jerome Bettis, Joey Porter ou Levon Kirkland étaient mes idoles) ; depuis j’ai été pas mal gâté avec (déjà) 2 Superbowls.</p>\r\n<p>Vous comprenez donc que je suis un inconditionnel du jeu tactique, défensif, rugueux et basé sur la course.</p>\r\n', 0),
(6, NULL, 'Fresquet', 'Alain', 'AF', NULL, NULL, NULL, NULL, NULL, 0),
(7, NULL, 'Martinez', 'François', 'FM', 'francois-martinez', 'frankism@wanadoo.fr', 2005, 'Rédacteur', '<p>François a rejoint UsFoot Network en 2005.</p><p>Il est le principal contributeur des Quick News tout au long de l''année.</p>', 0),
(8, NULL, 'La Rédaction', '', '_R_', NULL, 'webmaster@footballamericain.com', NULL, NULL, NULL, 2),
(9, 5, 'Savoja', 'Thomas', 'TS', 'thomas-savoja', 'tsavoja@yahoo.fr', 2009, 'Rédacteur et globe-trotter de l''Association', '<p>C''est le dernier arrivé !</p>\r\n<p>En 2009, il nous contacte pour savoir si son road trip footballistique nord américain nous intéresse. La réponse est évidemment oui. De son voyage, il nous a livré de beaux articles et de superbes photos.</p>\r\n<p>En novembre 2010, il remet ça et part sur la côte ouest des USA.</p>\r\n<p>De retour en France, il nous fait le plaisir d''écrire chaque semaine.</p>', 1),
(10, NULL, 'Montausier', 'Olivier', 'OM', 'olivier-montausier', NULL, 1999, 'Créateur UsFoot.com - Co-Fondateur Association UsFoot Network', NULL, 0),
(11, NULL, 'Dognon', 'Alexandre', '', NULL, NULL, NULL, NULL, NULL, 0),
(12, NULL, 'Tilly', 'Simon', '', NULL, NULL, NULL, NULL, NULL, 0),
(13, NULL, 'Booga', '', '', NULL, NULL, NULL, NULL, NULL, 0),
(14, NULL, 'Van Humbeek', 'Thierry', '', NULL, NULL, NULL, NULL, NULL, 0),
(15, NULL, 'Boisseau', 'Benjamin', '', NULL, NULL, NULL, NULL, NULL, 0),
(16, NULL, 'Franco', 'Alexandre', '', NULL, NULL, NULL, NULL, NULL, 0),
(17, NULL, 'Cecille', 'Sylvain', 'SC', 'sylvain-cecille', 'sylvain.cecille7@orange.fr', 2011, 'Rédacteur', '', 0),
(18, 13437, 'Laské', 'Lionel', 'LL', 'lionel-laske', 'lionel.laske@gmail.com', 2011, 'Concepteur application mobile', NULL, 1),
(19, 3, 'Deligny', 'Thomas', 'TDY', 'thomas-deligny', 'tomdeligny@gmail.com', 2011, 'Rédacteur', '<p>Comme la plupart, j’ai regardé et aimé le Foot US dès qu’il a été diffusé sur Canal plus. Avec l’arrêt de la retransmission des matches, ce n’est que bien plus tard que je me suis mis à suivre à nouveau les péripéties de la NFL et que j’ai commencé à m’intéresser à l’Elite. J’ai rejoint l’association en février 2011 et j’ai eu la chance de partager l’aventure en Autriche avec Thomas Depaepe et Pierre-François que je ne remercierai jamais assez.</p>\r\n<p>J’avoue préférer couvrir l’Elite car les joueurs sont plus proches de nous, plus accessibles et en tant qu’amateurs, ils donnent beaucoup pour vivre leur passion. J’en apprends toujours un peu plus à leurs côtés, en les regardant évoluer et surtout en partageant avec eux. J’espère pouvoir retranscrire au mieux et faire partager à mon tour ce qu’ils m’offrent.</p>\r\n<p>A bientôt sur les bords du terrain.</p>', 0),
(23, 13352, 'Baro', 'Mathieu', 'MB', 'mathieu-baro', 'mrguerrilla@gmail.com', 2012, 'Rédacteur', NULL, 0),
(20, 8, 'Cassier', 'Guillaume', 'GC', NULL, 'guillaume.cassier@hotmail.fr', 2012, 'Rédacteur, spécialiste des Texans et des Saints', NULL, 0),
(21, 9, 'Caillot', 'Guillaume', 'GCA', 'guillaume-caillot', 'guillaume.caillot@hotmail.fr', 2012, 'Rédacteur, spécialiste des Browns', '<p>Je m''appelle Guillaume et suis originaire de la r&eacute;gion Lyonnaise, vivant aujourd''hui &agrave; Gen&egrave;ve.</p>\r\n<p>J''ai suivi mes premiers matches de Foot US sur Canal + lors du "Greatest Show on Turf" avec le Superbowl remport&eacute; par les Rams en 1999.</p>\r\n<p>Je n''ai pas jamais l&acirc;ch&eacute; le football US depuis.</p>\r\n<p>Vers 2009 j''ai commenc&eacute; &agrave; vraiment appr&eacute;cier les Cleveland Browns, de par leur identit&eacute; "old-school" mais aussi pour le fait de soutenir un "underdog", une franchise en reconstruction.</p>\r\n<p>J''ai cr&eacute;&eacute; mon Blog en Ao&ucirc;t 2011 pour partager ma passion des Brownies et de la NFL:&nbsp;<a href="http://sidelinetosideline-fr.blogspot.fr/">http://sidelinetosideline-fr.blogspot.fr/</a></p>\r\n<p>Je suis parti &agrave; l''automne 2012 voir pour la premi&egrave;re fois des matches, les NY Giants &agrave; domicile et aussi &agrave; Cleveland pour voir mon &eacute;quipe favorite.</p>\r\n<p>Pierre-Fran&ccedil;ois me contactait d&eacute;but 2012 pour &ecirc;tre le "sp&eacute;cialiste" des Browns sur ce site et j''acceptais volontiers sa proposition.</p>\r\n<p>G&eacute;n&eacute;ralement au Foot US, je pr&eacute;f&egrave;re le jeu d&eacute;fensif par conditions climatiques rudes.</p>\r\n<p>Joueurs favoris : Marshall Faulk, Zach Thomas, Peyton Manning, Joe Haden, Joe Thomas, Trent Richardson.</p>\r\n<p>Je suis passionn&eacute; de College football et de baseball par ailleurs.</p>\r\n<p>N''h&eacute;sitez ps &agrave; me contacter sur mon blog ou le site !</p>', 0),
(22, 4, 'Martin', 'François-Noël', 'FRA', 'francois-noel-martin', 'fran_no@hotmail.com', 2012, 'Rédacteur, spécialiste Flag', NULL, 1),
(24, 13358, 'Tollu', 'Gabriel', 'GT', 'gabriel-tollu', 'gabrieltollu@gmail.com', 2012, 'Rédacteur', NULL, 0),
(25, 99, 'Pigiste', '', '_P_', NULL, NULL, NULL, NULL, NULL, 2),
(26, 13375, 'Revel', 'Yanik', 'YR', 'yanik-revel', 'legrenierdeyanik@gmail.com', 2012, 'Rédacteur', NULL, 0),
(27, 13385, 'Lapeyre', 'Brice', 'BL', 'brice-lapeyre', 'brice.h.lapeyre@gmail.com', 2013, 'Rédacteur', NULL, 0),
(28, 13434, 'Montant', 'Arnaud', 'AM', 'arnaud-montant', 'arnaud.montant@gmail.com', 2013, 'Rédacteur, correcteur', NULL, 0),
(29, NULL, 'Allaire', 'Claudin', 'CA', 'claudin-allaire', 'claud.allaire@comcast.net', 2013, 'Consultant basé aux Etats-Unis', '<p><a href="http://athletics.macalester.edu/coaches.aspx?rc=960&amp;path=football">Claudin Allaire</a> fait partie de l''&eacute;quipe des entraineurs &agrave; l''Universit&eacute; de Macalester dans l''Etat du Minnesota. Coach depuis 1987, ses exp&eacute;riences comprennent plusieurs High School (Lyc&eacute;es) dont 3 en tant que head coach : Minneapolis North (1991), Osseo (1996-2002) et Simley (2009-2010). Il a &eacute;galement &eacute;t&eacute; coach des running backs &agrave; Minnetonka High School lors de la saison 2004 o&ugrave; ils finirent champions de l''Etat.<br />Allaire a aussi &eacute;t&eacute; assistant en NCAA &agrave; Ithaca College (N.Y.), North Central College (Ill.), Normandale Community College et Hamline University. De plus, il a particip&eacute; activement &agrave; de nombreux camps, dont 10 ann&eacute;es &agrave; ceux de University of Michigan, a dirig&eacute; quelques clinics et est co-fondateur du clinic de la Minnesota Football Coaches Association.<br />Allaire a &eacute;t&eacute; coach lors du Minnesota High School All-Star game en 2002. Il sers actuellement le Mr. Football Committee et le comit&eacute; ex&eacute;cutif de la Minnesota Football Coaches Association.</p>\r\n<p>Titulaire d''un Master en Psychologie des Sports, il est également directeur scolaire.</p>\r\n<p>Claudin nous a contact&eacute; en ao&ucirc;t 2013 pour nous proposer de partager son exp&eacute;rience de coach avec le public francophone au travers d''une s&eacute;rie d''articles. Nous l''en remercions tr&egrave;s chaleureusement.</p>', 0),
(30, 75, 'Rival', 'Olivier', 'OR', 'olivier-rival', 'edenfrog@hotmail.com', 2013, 'Rédacteur', 'Fondateur Elite Foot Blog et SideLine', 1),
(31, 13609, 'Célerse', 'Grégory', 'GC', 'gregory-celerse', 'nflgreg@gmail.com', 2013, 'Rédacteur', '', 0),
(32, 6096, 'Collin', 'Blaise', 'BC', 'blaise-collin', 'blaisecollin@yahoo.fr', 2013, 'Journaliste basé aux Etats-Unis (Idaho)', '<p>Blaise Collin est un passionné de football universitaire et de NFL, basé dans l''Idaho depuis 2010. après avoir participé à l''étoffement des pages NCAA du site elitefoot.com et publié pendant deux ans (2007-2008) ses Chroniques du College Football, il a continué depuis à nous faire partager sa vision du football sur feu EliteFootMag et en rejoignant en 2013 la rédaction de 4th&Goal et désormais de footballamericain.com.</p>', 1),
(33, 15000, 'Foreau', 'Damien', 'DF', 'damien-foreau', 'damien.foreau@gmail.com', 2014, 'R&eacute;dacteur et cr&eacute;ateur de <a href="http://nfl-france.com/" target="_blank">NFL-France.com</a>', 'Damien est un passionn&eacute; de football am&eacute;ricain et de NFL. En 2012, il lance son blog :&nbsp;<a href="http://nfl-france.com/" target="_blank">NFL-France.com</a>&nbsp;qui connait un succ&egrave;s grandissant.<br />Deux ans plus tard, il accepte de participer &agrave; l''aventure FootballAmericain.com conjointement avec le d&eacute;veloppement de son site.', 3),
(34, 13729, 'Mbarki', 'Safi', 'SM', 'safi-mbarki', 'safi.mbarki@hotmail.fr', 2014, 'R&eacute;dacteur', '', 1),
(35, 13305, 'Caudroit V', 'Julien', 'JCV', 'julien-caudroit-v', 'caudroit.j@hotmail.fr', 2014, 'Rédacteur', NULL, 0),
(36, 8938, 'Quérat', 'Denis', 'DQ', 'denis-querat', 'ankouqdee32@yahoo.fr', 2014, 'Rédacteur Sideline.fr', NULL, 0),
(37, NULL, 'Urgenti', 'Julien', 'JU', 'julien-urgenti', NULL, NULL, 'Rédacteur Sideline.fr', NULL, 0),
(38, 14060, 'Thiery', 'Florian', 'FT', 'florian-thiery', 'elitestats@yahoo.fr', NULL, 'Rédacteur, anciennement Sideline.fr', NULL, 1),
(39, NULL, 'Carmichael', 'Jason Lee', 'JLC', 'jason-lee-carmichael', NULL, NULL, 'Rédacteur Sideline.fr', NULL, 0),
(40, 13755, 'Gauthier', 'Raphaël', 'RG', 'raphael-gauthier', 'gauthier.raph@gmail.com', NULL, 'Rédacteur Sideline.fr', NULL, 0),
(41, 13759, 'Harbec', 'Benoit', 'BH', 'benoit-harbec', 'bottedenvoi@gmail.com', 2014, 'Spécialiste Québécois du Foot Canadien. Créateur de bottedenvoi.blogspot.fr', NULL, 1),
(42, NULL, 'Bardot', 'Maxime', 'MBA', NULL, 'maxime.bardot@gmail.com', NULL, 'Rédacteur et co-fondateur du blog DallasCowboys.fr', NULL, 3),
(43, NULL, 'Manetti', 'Hugues', 'HMA', NULL, 'hugues21@hotmail.fr', NULL, 'Rédacteur et co-fondateur du blog DallasCowboys.fr', NULL, 3),
(44, 13411, 'Richard', 'Grégory', 'GR', 'gregory-richard', 'g_richard@hotmail.fr', 2014, 'Membre émérite de l''équipe de Radiossa, Grégory aka Iello participe activement à la rédaction du magazine 4th&Goal depuis sa création.', NULL, 1),
(45, 13811, 'Lecomte', 'Rémy', 'RL', 'remy-lecomte', 'remylec@gmail.com', 2014, 'Journaliste sportif. Passionné par le foot US et fan des New England Patriots.', NULL, 1),
(46, 13818, '', 'Tili', 'TIL', 'tili', 'tili94000@hotmail.com', 2014, 'Passionné par la NFL et son histoire. Plus encore : fan de défense(s) et de défenseur(s). Retrouvez ses contributions dans la section <a href=''/avec-un-d-comme-defense''>Avec un "D" comme "Défense"</a>.', NULL, 1),
(47, NULL, '', 'David', 'DAV', NULL, NULL, NULL, 'Rédacteur DallasCowboys.fr', NULL, 3),
(48, 14040, 'Tran Ngoc', 'Van', 'VTN', 'van-tran-ngoc', 'vantn13@yahoo.fr', 2015, 'Photographe', NULL, 1);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `idCategory` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `libCategory` varchar(50) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Contenu de la table `category`
--

INSERT INTO `category` (`idCategory`, `libCategory`) VALUES
(1, 'Règlement NFL'),
(2, 'Stratégies & Tactiques'),
(3, 'Equipe de France'),
(4, 'Coupe du Monde 2011'),
(5, 'Flag'),
(6, 'Magazine 4th-and-goal '),
(7, 'Sport365 TV'),
(8, 'Ma Chaine Sport'),
(9, 'FFFA'),
(10, 'Canada'),
(11, 'Avec un "D" comme "Défense"');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
