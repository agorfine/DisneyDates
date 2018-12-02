\c disneyDates;

INSERT INTO users VALUES (DEFAULT, 'Amanda', 'Gorfine', 'agorfine93@gmail.com', 25, 'princess', 'prince', 'Student', 'University of Delaware', 'Photographing couples get engaged in front of Cinderella Castle!', 'Meg from Hercules', 'Frozen', 'Epcot', 'Big Thunder Mountain');
INSERT INTO users VALUES (DEFAULT, 'Emily', 'Nebrasky', 'emily@gmail.com', 25, 'princess', 'prince', 'Purchasing', 'University of Delaware', 'Watching the fireworks in MK as my last night in the Disney College Program', 'Yzma', 'Aladdin', 'Magic Kingdom', 'Splash Mountain');
INSERT INTO users VALUES (DEFAULT, 'Aaron', 'Talan', 'aaron@gmail.com', 25, 'prince', 'princess', 'Accountant', 'University of Delaware', 'Drinking around the world at Epcot', 'Jafar', 'Frozen', 'Epcot', 'Its a small world');
INSERT INTO users VALUES (DEFAULT, 'Fred', 'Mack', 'fred@gmail.com', 28, 'prince', 'princess', 'Account Manager', 'University of Pennsylvania', 'Conquring my fear of rollercoasters on Expedition Everest', 'Joy', 'Wreck it Ralph', 'Animal Kingdom', 'People Mover');
INSERT INTO users VALUES (DEFAULT, 'Joe', 'Cilente', 'joe@gmail.com', 39, 'prince', 'princess', 'Chef', 'George Washington University', 'Walking down Main St and seeing Cinderella Castle for the first time', 'Sully', 'Sword and the Stone', 'Hollywood Studios', 'Space Mountain');
INSERT INTO users VALUES (DEFAULT, 'Nina', 'Dreyfus', 'nina@gmail.com', 25, 'princess', 'prince', 'Teacher', 'The New School', 'Eating my first Mickey bar', 'Simba', 'Mulan', 'Magic Kingdom', 'Rock n Rollercoaster');
INSERT INTO users VALUES (DEFAULT, 'Bradley', 'Peck', 'bradley@gmail.com', 27, 'prince', 'princess', 'Consultant', 'Cornell University', 'Watching the joy on my moms face as we rode the Peter Pan ride', 'Grumpy', 'Lion King', 'Hollywood Studios', 'Tower of Terror');
INSERT INTO users VALUES (DEFAULT, 'Colby', 'Girodano', 'colby@gmail.com', 25, 'princess', 'prince', 'Development Coordinator', 'Fordham University', 'Watching wishes fireworks show', 'Elsa', 'Frozen', 'Magic Kingdom', 'Buzz Lightyear Space Ranger Spin');

INSERT INTO matches VALUES (DEFAULT, 1, 3, 'true', 'true');
INSERT INTO matches VALUES (DEFAULT, 3, 1, 'true', 'true');
INSERT INTO matches VALUES (DEFAULT, 1, 4, 'true', 'true');
INSERT INTO matches VALUES (DEFAULT, 4, 1, 'true', 'true');
-- INSERT INTO matches(id,user_id,other_user_id,user_id_liked,other_user_id_liked) VALUES (DEFAULT, 1, 5, 'true', 'true');
-- INSERT INTO matches(id,user_id,other_user_id,user_id_liked,other_user_id_liked) VALUES (DEFAULT, 5, 1, 'true', 'true');
-- INSERT INTO matches(id,user_id,other_user_id,user_id_liked,other_user_id_liked) VALUES (DEFAULT, 1, 7, 'true', 'true');
-- INSERT INTO matches(id,user_id,other_user_id,user_id_liked,other_user_id_liked) VALUES (DEFAULT, 7, 1, 'true', 'true');

INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541696663/fullsizeoutput_2537.jpg');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541646750/Screen_Shot_2018-11-07_at_10.11.10_PM.png');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1541646719/Screen_Shot_2018-11-07_at_10.09.40_PM.png');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543034525/IMG_1213.jpg');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543034556/IMG_2641.jpg');
INSERT INTO pictures VALUES (DEFAULT, 1, 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543034795/IMG_2615.jpg');
INSERT INTO pictures VALUES (DEFAULT, 3, 'http://www.photogriffon.com/photos-du-monde/DWAYNE-JOHNSON-THE-ROCK-th-best-pictures-ses-plus-belles-photos/DWAYNE-JOHNSON-THE-ROCK-photo-man-maxy-force-bodybuilding-1.jpg');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://www.rollingstone.com/wp-content/uploads/2018/06/dwayne-the-rock-johnson-for-president-094088ba-7415-4b23-8a9a-0150b55749ec.jpg');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2017/11/instyle-january-the-rock-3.jpg?itok=6TVaAs42');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://studybreaks.com/wp-content/uploads/2018/07/dwaynejohnson.jpg');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/dwayne-johnson-dumbbells-1109.jpg?itok=TMDE3xqT');
INSERT INTO pictures VALUES (DEFAULT, 3, 'https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2017/08/081117-the-rock.jpg?itok=q42vQqdR');
INSERT INTO pictures VALUES (DEFAULT, 4, 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2016%2F08%2Fzac-efron-660-36.jpg%3Fw%3D660&w=700&c=sc&poi=face&q=85');
INSERT INTO pictures VALUES (DEFAULT, 4, 'https://s1.r29static.com//bin/entry/d73/720x864,80/1956540/image.jpg');
INSERT INTO pictures VALUES (DEFAULT, 4, 'https://pbs.twimg.com/profile_images/824374216904556557/_HQnghu-_400x400.jpg');
INSERT INTO pictures VALUES (DEFAULT, 4, 'https://www.mensjournal.com/wp-content/uploads/mf/zac_efron_body_main.jpg?w=1200');
INSERT INTO pictures VALUES (DEFAULT, 4, 'http://cdn01.cdn.justjaredjr.com/wp-content/uploads/headlines/2017/12/zac-efron-happy-musicals-back.jpg');
INSERT INTO pictures VALUES (DEFAULT, 4, 'https://instagram.com/p/BMR4IdjjXX1/media/?size=l');
INSERT INTO pictures VALUES (DEFAULT, 5, 'https://i.forbesimg.com/media/lists/people/nick-jonas_416x416.jpg');
INSERT INTO pictures VALUES (DEFAULT, 5, 'https://oakland.edu/Assets/Oakland/newsatou/graphics/2018/NickJonas1440.jpg');
INSERT INTO pictures VALUES (DEFAULT, 5, 'https://i1.adis.ws/i/johnvarvatos/07.13_PLP_Fragrance?$PLP-PROMO-DESKTOP$');
INSERT INTO pictures VALUES (DEFAULT, 5, 'https://static1.squarespace.com/static/56c346b607eaa09d9189a870/t/58a642bbf7d1ffebb603d20f/1487291466260/Flaunt_Mag_Nick_Jonas_02_0118_Cnz.jpg');
INSERT INTO pictures VALUES (DEFAULT, 5, 'https://www.ontrackdiabetes.com/sites/default/files/imagecache/gallery-large/content-images/2016/02/01/nj-82_0.jpg');
INSERT INTO pictures VALUES (DEFAULT, 7, 'https://bodyartguru.com/wp-content/uploads/2017/10/Ryan-Gosling-Tattoos.jpg');
INSERT INTO pictures VALUES (DEFAULT, 7, 'https://akns-images.eonline.com/eol_images/Entire_Site/20171010/rs_600x600-171110174406-600.Ryan-Gosling-Hot.ms.111017.jpg?fit=around|700:700&crop=700:700;center,top&output-quality=90');
INSERT INTO pictures VALUES (DEFAULT, 7, 'https://i.pinimg.com/originals/ed/49/36/ed4936dda167ee6907ebe2d9ef39b88a.jpg');
INSERT INTO pictures VALUES (DEFAULT, 7, 'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2018-09/gettyimages-1031364078.jpg?itok=UKVahO5N&h=714fe7a1');
INSERT INTO pictures VALUES (DEFAULT, 7, 'https://www.latimes.com/resizer/H7D4_67rkJ9z1Fl96BuL1eLmsHg=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HKY3OVLIC5BK7EQOKBKZ7AIFKA.jpg');
INSERT INTO pictures VALUES (DEFAULT, 7, 'https://static.tvgcdn.net/mediabin/showcards/celebs/p-r/thumbs/ryan-gosling_sc_768x1024.png');





