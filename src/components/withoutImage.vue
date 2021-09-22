
        var mixedLayoutThreshold = 4;
        var pagingThreshold = 6;
        OrgChart.MIXED_LAYOUT_ALL_NODES = false;
        OrgChart.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN = true;
        var expcollclick = false;

        OrgChart.templates.split.size = [0, 0];
        OrgChart.templates.split.node = '';
        OrgChart.templates.split.link = '<path stroke-linejoin="round" stroke="#808080" stroke-width="3px" fill="none" d="{rounded}" />';

        OrgChart.templates.small = Object.assign({}, OrgChart.templates.ana);
        OrgChart.templates.small.size = [200, 100];
        OrgChart.templates.small.img_0 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="1" y="1"  width="78" height="78"></image>';

    OrgChart.templates.small.node = 
            '<rect x="0" y="0" height="25" width="{w}" fill="#4f81bd" stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="160" y="0" height="25" width="40" fill="#fff" stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="0" y="25" height="50" width="{w}" fill="#fff" stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="0" y="75" height="25" width="100" fill="#a6a59a"  stroke-width="3" stroke="#808080"></rect>'
            + '<rect x="100" y="75" height="25" width="100" fill="#e2eafb" stroke-width="3" stroke="#808080"></rect>';
        OrgChart.templates.small.link = '<path stroke-linejoin="round" stroke="#808080" stroke-width="3px" fill="none" d="{rounded}" />';
        OrgChart.templates.small.field_0 = '<text width="167" text-overflow="ellipsis" style="font-size: 16px;" fill="#fff" x="83.5" y="18" text-anchor="middle">{val}</text>',
        OrgChart.templates.small.field_1 = '<text width="192" text-overflow="multiline" style="font-size: 16px;" fill="#757575" x="100" y="57" text-anchor="middle">{val}</text>';

        OrgChart.templates.small.minus = "";
        OrgChart.templates.small.plus = "";

        OrgChart.templates.see_more = Object.assign({}, OrgChart.templates.small);
        OrgChart.templates.see_more.size = [200, 40];
        OrgChart.templates.see_more.node = '<rect x="0" y="3" height="{h}" width="{w}" fill="#fff" stroke-width="0"></rect>';
        OrgChart.templates.see_more.see_more_field = '<text  style="font-size: 16px;pointer-events: none;" fill="#039BE5" x="100" y="22" text-anchor="middle">See ({val}) more...</text>';



        var chart = new OrgChart(document.getElementById('tree'), {
            orderBy: 'id',
            enableSearch: false,
            enableDragDrop: true,
            nodeMouseClick: OrgChart.action.none,
            template: 'small',
            layout: OrgChart.tree,
            siblingSeparation: 10,
            subtreeSeparation: 20,
            mixedHierarchyNodesSeparation: 0,

            tags: {
                small: { template: 'small' },
                see_more: { template: 'see_more' }
            },
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                up: 'up',
                img_0: "img",
                see_more_field: 'see_more_field'
            }
        });

        chart.on('click', function (sender, args) {
            if (args.node.templateName == 'see_more') {
                var pnode = sender.getNode(args.node.pid);
                var expandIds = [];
                for (var i = 0; i < pnode.childrenIds.length; i++) {
                    var cnode = sender.getNode(pnode.childrenIds[i]);

                    if (cnode && cnode.collapsed === true) {
                        expandIds.push(cnode.id);
                        if (expandIds.length >= pagingThreshold) {
                            break;
                        }
                    }
                }

                sender.expandCollapse(args.node.pid, expandIds, []);
            }
        });

        chart.on('field', function (sender, args) {

            if (args.name == 'see_more_field') {
                if (args.node.templateName == 'see_more') {
                    args.value = pagingThreshold;
                    var pnode = sender.getNode(args.node.pid);
                    var collpsedCount = OrgChart.collapsedChildrenCount(sender, pnode, 0);

                    if (collpsedCount < pagingThreshold) {
                        args.value = collpsedCount;
                    }
                }
            }
        });




        OrgChart.events.on('layout', function (args) {
            if (args.action == OrgChart.action.init || (args.action == OrgChart.action.expand && args.actionParams.id == args.pnode.id && !expcollclick)) {
                if (args.childrenIds.length > pagingThreshold) {
                    for (var i = args.childrenIds.length - 1; i >= pagingThreshold; i--) {
                        var id = args.childrenIds[i];
                        args.childrenIds.splice(i, 1);
                        for (var j = args.pnode.children.length - 1; j >= 0; j--) {
                            if (args.pnode.children[j].id == id) {
                                args.pnode.children[j].collapsed = true;
                                args.pnode.children.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
            }

            if (args.pnode.children.length != args.pnode.childrenIds.length) {
                var smnode = new OrgChart.node(args.pnode.id + "_see_more", args.pnode.id, ['see_more'], "see_more");
                smnode.w = OrgChart.templates.see_more.size[0];
                smnode.h = OrgChart.templates.see_more.size[1];
                smnode.parent = args.pnode;
                args.childrenIds.push(smnode.id);
                args.pnode.children.push(smnode);
                args.nodes[smnode.id] = smnode;
            }



            for (var i = 0; i < args.childrenIds.length; i++) {
                var cnode = args.nodes[args.childrenIds[i]];
                if (cnode.templateName != 'see_more') {
                    cnode.templateName = 'small';
                    cnode.w = OrgChart.templates.small.size[0];
                    cnode.h = OrgChart.templates.small.size[1];
                }
            }

            if (args.childrenIds.length <= mixedLayoutThreshold) {
                args.layout = OrgChart.mixed;
            }
        });


        chart.on('redraw', function (sender) {
            var allNodesRect = document.querySelectorAll('[node-id] rect');
            for (i = 0; i < allNodesRect.length; i++) {
                var text = document.querySelectorAll('[node-id="' + (i + 1) + '"] text');
                var allNodeTspans = document.querySelectorAll('[node-id="' + (i + 1) + '"] text tspan');
                

                if (allNodeTspans.length == 2) {
                    allNodeTspans[0].setAttribute("y", 47);
                    allNodeTspans[1].setAttribute("y", 67);

                }
            }
        });

        chart.load([
        {
    id: 1,
    name: 'Nicky Phillips',
    title: 'Chief executive officer',
    up:'E07'
        } ,
{
    id: 2,
    pid: 1,
    name: 'Jordana Harris',
    title: 'Chief information officer'
}, {
    id: 3,
    pid: 1,
    name: 'Cory Robbins',
    title: 'Chief human resources officer'
}, {
    id: 4,
    pid: 1,
    name: 'Lynn Fleming',
    title: 'QA Manager'
}, {
    id: 5,
    pid: 1,
    name: 'Inara Johns',
    title: 'Development Manager'
}, {
    id: 6,
    pid: 1,
    name: 'Davina Findlay',
    title: 'Development manager'
}, {
    id: 7,
    pid: 1,
    name: 'Trevor Moon',
    title: 'Account Executive'
}, {
    id: 8,
    pid: 1,
    name: 'Phillipa Griffiths',
    title: 'Development Manager'
}, {
    id: 9,
    pid: 1,
    name: 'Antoine Nairn',
    title: 'Chief Financial Officer'
}, {
    id: 10,
    pid: 1,
    name: 'Yasmin Kenny',
    title: 'Procurement officer'
}, {
    id: 11,
    pid: 1,
    name: 'Teegan Draper',
    title: 'Development Manager'
}, {
    id: 11111,
    pid: 1,
    name: 'Hayley Keenan',
    title: 'Development Manager'
},
{
    id: 12,
    pid: 2,
    name: 'Jo Baker',
    title: 'Development manager'
}, {
    id: 13,
    pid: 2,
    name: 'Tala Britt',
    title: 'Development manager'
}, {
    id: 14,
    pid: 2,
    name: 'Fariha Weeks',
    title: 'Digital marketing manager'
}, {
    id: 15,
    pid: 2,
    name: 'Fatimah Parker',
    title: 'Communications manager'
},
{
    id: 16,
    pid: 3,
    name: 'Jane Valdez',
    title: 'Chief diversity officer'
}, {
    id: 17,
    pid: 3,
    name: 'Isobel Mathews',
    title: 'Compensation and benefits manager'
}, {
    id: 18,
    pid: 3,
    name: 'Jokubas Hail',
    title: 'HR Manager'
}, {
    id: 19,
    pid: 3,
    name: 'Shannan Bird',
    title: 'Human resource information manager'
}, {
    id: 20,
    pid: 3,
    name: 'Miranda Bradford',
    title: 'Recruitment manager'
},
{
    id: 21,
    pid: 4,
    name: 'Aadam Mccoy',
    title: 'QA specialist'
}, {
    id: 22,
    pid: 4,
    name: 'Lacy Adams',
    title: 'Quality auditor'
}, {
    id: 23,
    pid: 4,
    name: 'Sahra Cresswell',
    title: 'Quality coordinator'
}, {
    id: 24,
    pid: 4,
    name: 'Leslie Mcdowell',
    title: 'Quality assurance tester'
}, {
    id: 25,
    pid: 4,
    name: 'Nichole Meadows',
    title: 'QA specialist'
}, {
    id: 26,
    pid: 4,
    name: 'Beth Hutchings',
    title: 'Quality analyst'
}, {
    id: 27,
    pid: 4,
    name: 'Savannah Shah',
    title: 'QA specialist'
}, {
    id: 28,
    pid: 4,
    name: 'Sana Bray',
    title: 'QA specialist'
}, {
    id: 29,
    pid: 4,
    name: 'Tia Collier',
    title: 'QA specialist'
},
{
    id: 30,
    pid: 5,
    name: 'Sian Webb',
    title: 'Full Stack Developer'
}, {
    id: 31,
    pid: 5,
    name: 'Amna Gibbs',
    title: 'Full Stack Developer'
}, {
    id: 32,
    pid: 5,
    name: 'Abraham Mair',
    title: 'Full Stack Developer'
}, {
    id: 33,
    pid: 5,
    name: 'Fateh Leonard',
    title: 'Full Stack Developer'
}, {
    id: 34,
    pid: 5,
    name: 'Paige Roth',
    title: 'Full Stack Developer'
}, {
    id: 35,
    pid: 5,
    name: 'Md York',
    title: 'Full Stack Developer'
}, {
    id: 36,
    pid: 5,
    name: 'Simona Drake',
    title: 'Full Stack Developer',
}, {
    id: 37,
    pid: 5,
    name: 'Ilyas Dunne',
    title: 'Full Stack Developer'
}, {
    id: 38,
    pid: 5,
    name: 'Edison Shelton',
    title: 'Full Stack Developer'
}, {
    id: 39,
    pid: 5,
    name: 'Katelyn Michael',
    title: 'Full Stack Developer'
},
{
    id: 40,
    pid: 6,
    name: 'Wasim Clifford',
    title: 'Full Stack Developer'
}, {
    id: 41,
    pid: 6,
    name: 'Raja Thompson',
    title: 'Full Stack Developer'
}, {
    id: 42,
    pid: 6,
    name: 'Ed Hartman',
    title: 'Full Stack Developer'
}, {
    id: 43,
    pid: 6,
    name: 'Rufus Coles',
    title: 'Full Stack Developer'
}, {
    id: 44,
    pid: 6,
    name: 'Tim Mcculloch',
    title: 'Full Stack Developer'
}, {
    id: 45,
    pid: 6,
    name: 'Tiana Senior',
    title: 'Full Stack Developer'
}, {
    id: 46,
    pid: 6,
    name: 'Mazie Knapp',
    title: 'Full Stack Developer'
}, {
    id: 47,
    pid: 6,
    name: 'Inaayah Amos',
    title: 'Full Stack Developer'
}, {
    id: 48,
    pid: 6,
    name: 'Anastasia Mckee',
    title: 'Full Stack Developer'
}, {
    id: 49,
    pid: 6,
    name: 'Jonty Goodwin',
    title: 'Full Stack Developer'
},
{
    id: 50,
    pid: 6,
    name: 'Tevin Lopez',
    title: 'Full Stack Developer'
}, {
    id: 51,
    pid: 6,
    name: 'Jazmin Hibbert',
    title: 'Full Stack Developer'
}, {
    id: 52,
    pid: 6,
    name: 'Mahira Fritz',
    title: 'Full Stack Developer'
}, {
    id: 53,
    pid: 6,
    name: 'Angela Cochran',
    title: 'Full Stack Developer'
}, {
    id: 54,
    pid: 6,
    name: 'Ava-Grace Childs',
    title: 'Full Stack Developer'
}, {
    id: 55,
    pid: 6,
    name: 'Dylan Elliott',
    title: 'Full Stack Developer'
}, {
    id: 56,
    pid: 6,
    name: 'David Hawes',
    title: 'Full Stack Developer'
}, {
    id: 57,
    pid: 6,
    name: 'Kameron Daly',
    title: 'Full Stack Developer'
}, {
    id: 58,
    pid: 6,
    name: 'Melody Blake',
    title: 'Full Stack Developer'
}, {
    id: 59,
    pid: 6,
    name: 'Maverick Lyons',
    title: 'Full Stack Developer'
},
{
    id: 60,
    pid: 7,
    name: 'Bjorn Cabrera',
    title: 'Account Broker'
}, {
    id: 61,
    pid: 7,
    name: 'Aled Portillo',
    title: 'Actuary'
}, {
    id: 62,
    pid: 7,
    name: 'Abdi Bannister',
    title: 'Account Executive'
}, {
    id: 63,
    pid: 7,
    name: 'Huseyin Smyth',
    title: 'Credit Analyst'
}, {
    id: 64,
    pid: 7,
    name: 'Alanna Heath',
    title: 'Customer Service – Finance'
}, {
    id: 65,
    pid: 7,
    name: 'King Waters',
    title: 'Financial Analyst'
}, {
    id: 66,
    pid: 7,
    name: 'Rishi Church',
    title: 'Financial Consultant'
}, {
    id: 67,
    pid: 7,
    name: 'Neo Hinton',
    title: 'Financial Planning and Analysis Manager'
}, {
    id: 68,
    pid: 7,
    name: 'Ellie-Mai White',
    title: 'Investment Advisor'
}, {
    id: 69,
    pid: 7,
    name: 'Rabia Markham',
    title: 'Investment Analyst'
},
{
    id: 70,
    pid: 8,
    name: 'Gwen Shannon',
    title: 'Back-end Developer'
}, {
    id: 71,
    pid: 8,
    name: 'Lina Legge',
    title: 'Back-end Developer'
}, {
    id: 72,
    pid: 8,
    name: 'Ivie Perez',
    title: 'Back-end Developer'
}, {
    id: 73,
    pid: 8,
    name: 'Kadie Lester',
    title: 'Back-end Developer'
}, {
    id: 74,
    pid: 8,
    name: 'Zara Gay',
    title: 'Back-end Developer'
}, {
    id: 75,
    pid: 8,
    name: 'Theodora Hollis',
    title: 'Back-end Developer'
}, {
    id: 76,
    pid: 8,
    name: 'Ralphie Cousins',
    title: 'Back-end Developer'
}, {
    id: 77,
    pid: 8,
    name: 'Dion Burch',
    title: 'Back-end Developer'
}, {
    id: 78,
    pid: 8,
    name: 'Connie Vinson',
    title: 'Back-end Developer'
}, {
    id: 79,
    pid: 8,
    name: 'Sakina Spears',
    title: 'Back-end Developer'
},
{
    id: 80,
    pid: 11111,
    name: 'Lilly-May Miller',
    title: 'Front-end Developer'
}, {
    id: 81,
    pid: 11111,
    name: 'Amelia-Rose Millington',
    title: 'Front-end Developer'
}, {
    id: 82,
    pid: 11111,
    name: 'Krystal Prince',
    title: 'Front-end Developer'
}, {
    id: 83,
    pid: 11111,
    name: 'Caoimhe Hook',
    title: 'Front-end Developer'
}, {
    id: 84,
    pid: 11111,
    name: 'Lloyd Sanford',
    title: 'Front-end Developer'
}, {
    id: 85,
    pid: 11111,
    name: 'Kristen Wilson',
    title: 'Front-end Developer'
}, {
    id: 86,
    pid: 11111,
    name: 'Stacie Marshall',
    title: 'Front-end Developer'
}, {
    id: 87,
    pid: 11111,
    name: 'Leyton Holcomb',
    title: 'Front-end Developer'
}, {
    id: 88,
    pid: 11111,
    name: 'Abu Neville',
    title: 'Front-end Developer'
}, {
    id: 89,
    pid: 11111,
    name: 'Merlin Rojas',
    title: 'Front-end Developer'
},
{
    id: 90,
    pid: 12,
    name: 'Madison Oneal',
    title: 'UI/UX Designer'
}, {
    id: 91,
    pid: 12,
    name: 'Ralphy Ellwood',
    title: 'UX Designer'
}, {
    id: 92,
    pid: 12,
    name: 'Lucie Riggs',
    title: 'UX Copywriter'
}, {
    id: 93,
    pid: 13,
    name: 'Nathalie Whitney',
    title: 'UI Designer'
}, {
    id: 94,
    pid: 13,
    name: 'Ronny Connelly',
    title: 'Marketing specialist'
}, {
    id: 95,
    pid: 14,
    name: 'Lily-Grace Dodson',
    title: 'Digital marketing specialist'
}, {
    id: 96,
    pid: 14,
    name: 'Tanvir Ingram',
    title: 'Digital marketing specialist'
}, {
    id: 97,
    pid: 15,
    name: 'Indi Guy',
    title: 'Communications specialist'
}, {
    id: 98,
    pid: 15,
    name: 'Phoenix Stokes',
    title: 'Communications specialist'
}, {
    id: 99,
    pid: 16,
    name: 'Phillippa Wilkins',
    title: 'Diversity specialist'
},
{
    id: 100,
    pid: 17,
    name: 'Britney Potter',
    title: 'Compensation and Benefits Specialist'
}, {
    id: 101,
    pid: 17,
    name: 'Asiya Duran',
    title: 'Compensation and Benefits Specialist'
}, {
    id: 102,
    pid: 18,
    name: 'Mariya Kemp',
    title: 'HR specialist'
}, {
    id: 103,
    pid: 18,
    name: 'Yaqub Terry',
    title: 'HR specialist'
}, {
    id: 104,
    pid: 18,
    name: 'Adrian Guzman',
    title: 'HR specialist'
}, {
    id: 105,
    pid: 19,
    name: 'Dane Frost',
    title: 'Human resource information specialist'
}, {
    id: 106,
    pid: 20,
    name: 'Eliot Delgado',
    title: 'Recruiter'
}, {
    id: 107,
    pid: 20,
    name: 'Bobbi Weaver',
    title: 'Recruiter'
}, {
    id: 108,
    pid: 20,
    name: 'Jillian Burgess',
    title: 'Recruiter'
}, {
    id: 109,
    pid: 20,
    name: 'Tyrese Morales',
    title: 'Recruiter'
},
{
    id: 110,
    pid: 21,
    name: 'Hetty Randall',
    title: 'QA specialist trainee'
}, {
    id: 111,
    pid: 21,
    name: 'Kory Kearns',
    title: 'QA specialist trainee'
}, {
    id: 112,
    pid: 23,
    name: 'Rikki Reynolds',
    title: 'QA specialist trainee'
}, {
    id: 113,
    pid: 23,
    name: 'Ciaran Hussain',
    title: 'QA specialist trainee'
}, {
    id: 114,
    pid: 24,
    name: 'Bailey Prince',
    title: 'QA specialist trainee'
}, {
    id: 115,
    pid: 25,
    name: 'Reo Melia',
    title: 'QA specialist trainee'
}, {
    id: 116,
    pid: 26,
    name: 'Nadia Odom',
    title: 'QA specialist trainee'
}, {
    id: 117,
    pid: 26,
    name: 'Kim Beach',
    title: 'QA specialist trainee'
}, {
    id: 118,
    pid: 26,
    name: 'Gabriel Mcghee',
    title: 'QA specialist trainee'
}, {
    id: 119,
    pid: 26,
    name: 'Camille Hodge',
    title: 'QA specialist trainee'
},
{
    id: 120,
    pid: 30,
    name: 'Rebekah Cullen',
    title: 'Full Stack Development trainee'
}, {
    id: 121,
    pid: 32,
    name: 'Colby Workman',
    title: 'Full Stack Development trainee'
}, {
    id: 122,
    pid: 32,
    name: 'Lorena Key',
    title: 'Full Stack Development trainee'
}, {
    id: 123,
    pid: 32,
    name: 'Destiny Mcguire',
    title: 'Full Stack Development trainee',
}, {
    id: 124,
    pid: 32,
    name: 'Hadley White',
    title: 'Full Stack Development trainee'
}, {
    id: 125,
    pid: 32,
    name: 'Cameron Huber',
    title: 'Full Stack Development trainee'
}, {
    id: 126,
    pid: 32,
    name: 'Alexie Bowler',
    title: 'Full Stack Development trainee'
}, {
    id: 127,
    pid: 126,
    name: 'Tanvir Bush',
    title: 'Full Stack Development trainee'
}, {
    id: 128,
    pid: 126,
    name: 'Sheldon Herman',
    title: 'Full Stack Development trainee'
}, {
    id: 129,
    pid: 126,
    name: 'Yassin Hale',
    title: 'Full Stack Development trainee'
}



        ]);