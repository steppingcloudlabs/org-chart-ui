import OrgChart from "@balkangraph/orgchart.js/orgchart";
export const withoutImage={
    
    methods:{
        newDesign:function(domEl,x,orderBy)
        {
            OrgChart.templates.greyTemplate = Object.assign({}, OrgChart.templates.ula);
            OrgChart.templates.greyTemplate.size = [350, 160]; // [250, 105] if you need plus-minus button
            OrgChart.templates.greyTemplate.node = 
              '<rect x="0" y="5" height="155" width="{w}" fill="#ffffff" stroke-width="1" stroke="#ccc" rx="5" ry="5"></rect>' + 
              '<rect x="0" y="5" height="35" width="{w}" fill="#ccc" stroke-width="1" stroke="#ccc" rx="5" ry="5"></rect>' +
              '<line x1="0" y1="40" x2="350" y2="40" stroke-width="5" stroke="#ccc"></line>'+
              '<circle cx="50" cy="60" r="43" fill="#ffffff"></circle>';
            
            // OrgChart.templates.greyTemplate.img_0 = 
            //     '<clipPath id="ulaImg">'
            //     + '<circle cx="100" cy="100" r="30"></circle>'
            //     + '</clipPath>' 
            //     + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="60" height="60">'
            //     + '</image>';
            OrgChart.templates.greyTemplate.link = '<path stroke-linejoin="round" stroke="#616161" stroke-width="1px" fill="none" d="{edge}" />';
            OrgChart.templates.greyTemplate.field_0 = '<text width="300" style="font-size: 18px;" fill="#64696b" x="175" y="30" text-anchor="middle">{val}</text>';
            OrgChart.templates.greyTemplate.field_1 = '<text width="300" style="font-size: 18px;" font-weight="bold" fill="#64696b" x="175" y="60" text-anchor="middle">{val}</text>';
            OrgChart.templates.greyTemplate.field_2 = '<text width="300" style="font-size: 18px;" fill="#64696b" x="130" y="85" text-anchor="middle">{val}</text>';
            OrgChart.templates.greyTemplate.field_3 = '<text width="300" style="font-size: 18px;" fill="#64696b" x="230" y="85" text-anchor="middle">{val}</text>';
            OrgChart.templates.greyTemplate.field_4 = '<text width="300" style="font-size: 18px;" fill="#64696b" x="130" y="110" text-anchor="middle">{val}</text>';
            OrgChart.templates.greyTemplate.field_5 = '<text width="300" style="font-size: 18px;" fill="#64696b" x="230" y="110" text-anchor="middle">{val}</text>';
            OrgChart.templates.greyTemplate.field_6 = '<text width="300" style="font-size: 18px;" fill="#64696b" x="175" y="135" text-anchor="middle">{val}</text>';
            
            // OrgChart.templates.greyTemplate.exportMenuButton = 
            //     '<div style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" data-ctrl-menu="">'
            //     + '<hr style="background-color: #0890D3; height: 3px; border: none;">'
            //     + '<hr style="background-color: #0890D3; height: 3px; border: none;">'
            //     + '<hr style="background-color: #0890D3; height: 3px; border: none;">'
            //     + '</div>'; 
            OrgChart.templates.greyTemplate.nodeMenuButton = 
                '<g style="cursor:pointer;" transform="matrix(1,0,0,1,93,15)" data-ctrl-n-menu-id="{id}">'
                + '<rect x="230" y="-10" fill="#000000" fill-opacity="0" width="22" height="22">'
                + '</rect>'
                + '<circle cx="235" cy="10" r="3" fill="#232423"/>'
                + '<circle cx="244" cy="10" r="3" fill="#232423"/>'
                + '</g>';
        
            OrgChart.templates.redTemplate = Object.assign({}, OrgChart.templates.greyTemplate);
            OrgChart.templates.redTemplate.node = 
              '<rect x="0" y="5" height="155" width="{w}" fill="#ffffff" stroke-width="1" stroke="#e53835" rx="5" ry="5"></rect>' + 
              '<rect x="0" y="5" height="35" width="{w}" fill="#e53835" stroke-width="1" stroke="#e53835" rx="5" ry="5"></rect>' +
              '<line x1="0" y1="40" x2="350" y2="40" stroke-width="5" stroke="#e53835"></line>'+'<circle cx="50" cy="60" r="43" fill="#ffffff"></circle>';
            OrgChart.templates.redTemplate.field_0 = '<text width="300" style="font-size: 18px;" fill="white" x="175" y="30" text-anchor="middle">{val}</text>';
            OrgChart.templates.greenTemplate = Object.assign({}, OrgChart.templates.redTemplate);
            OrgChart.templates.greenTemplate.node = 
              '<rect x="0" y="5" height="155" width="{w}" fill="#ffffff" stroke-width="1" stroke="#009933" rx="5" ry="5"></rect>' + 
              '<rect x="0" y="5" height="35" width="{w}" fill="#009933" stroke-width="1" stroke="#009933" rx="5" ry="5"></rect>' +
              '<line x1="0" y1="40" x2="350" y2="40" stroke-width="5" stroke="#009933"></line>'+'<circle cx="50" cy="60" r="43" fill="#ffffff"></circle>';
            
              
            
            var g=this
            var chart = new OrgChart(domEl, {
                enableDragDrop: true,
                levelSeparation: 30,
                subtreeSeparation: 30,
                nodeMouseClick: OrgChart.action.none,
                toolbar: {
                  zoom: true,
                  fit: true,
                  expandAll: false,
                },
                showXScroll: OrgChart.scroll.visible,
                showYScroll: OrgChart.scroll.visible,
                mouseScrool: OrgChart.action.none,
        
                enableSearch: false,
        
                menu: {
                  Export: {
                    text: "Export Chart",
                    icon: OrgChart.icon.svg(18, 18),
                    onClick: this.download,
                  },
                  pdf: {
                    text: "Export PDF",
                   
                    icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
                   
                  },
                  png: {
                    text: "Export PNG",
                  },
                },
                nodeMenu: {
                  levelDown: {
                    text: "Level Down",
                    icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
                    onClick: this.addChildDataToChart,
                  },
                  allLevel:
                  {
                    text:"Expand all siblings",
                    onClick:this.expandLevelChild,
                    icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
        
                  },
                  exportProfile: {
                    text: "View Profile",
                    icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
                    onClick: this.exportUserProfile,
                  },
                  edit: {
                    text: "Edit",
                  },
                },
        
                tags: {
                  subLevels0: {
                    subLevels: 1,
                    levelSeparation: 10,
                  },
                  subLevels1: {
                    subLevels: 2,
                    levelSeparation: 10,
                  },
                  subLevels2: {
                    subLevels: 3,
                    levelSeparation: 10,
                  },
                  subLevels3: {
                    subLevels: 4,
                    levelSeparation: 10,
                  },
                  subLevels4: {
                    subLevels: 5,
                    levelSeparation: 10,
                  },
                  subLevels5: {
                    subLevels: 6,
                    levelSeparation: 10,
                  },
                  subLevels6: {
                    subLevels: 7,
                    levelSeparation: 10,
                  },
                  subLevels7: {
                    subLevels: 8,
                    levelSeparation: 10,
                  },
                  subLevels8: {
                    subLevels: 9,
                    levelSeparation: 10,
                  },
                  subLevels9: {
                    subLevels: 10,
                    levelSeparation: 10,
                  },
                  RootNode: {
                    nodeMenu: {
                      levelUp: {
                        text: "Level Up",
                        icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
                        onClick: this.addChildDataToChart,
                      },
                      exportProfile: {
                        text: "View Profile",
                        icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
                        onClick: this.exportUserProfile,
                      },
                      edit: {
                        text: "Edit",
                      },
                    },
                  },
                  assistant: {
                    template: "belinda",
                  },
                   nonImage: {
                    template: "ula",
                  },
                  dummy: {
                    template: "deborah",
                    nodeMenu: {},
                  },
                },
        
                template: "greyTemplate",
                nodes: x,
                orderBy: orderBy,
                nodeBinding: {
                  field_0: "positionTitle",
                  field_1: "userName",
                  field_3: this.field2_binding,
                  field_4: this.field3_binding,
                  field_5: this.field4_binding,
                  field_6: "positionVacant",
                 
                  
                  // field_11: "positionVacant",
                  img_0: this.img_binding,
                  
                },
              });
             
             // this.chart.fit();
              chart.on("click", (sender, args) => {
                var data = sender.get(args.node.id);
                
                var data1 = sender.get(args.node.pid);
        
                this.selectedId = data.id;
                this.blur();
                if (!this.showNodeProfile) {
                  this.$store.commit("ShowNodeProfile", data);
                  this.$store.commit("parentNodeData", data1);
                } else {
                  this.showNodeProfile = !this.showNodeProfile;
                }
              });
        
              chart.on("exportstart", function (sender, args) {
                
                document.getElementById("tabb").style.visibility="visible"
                args.styles +=
                  '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">';
                args.styles += document.getElementById("myStyles").outerHTML;
               args.content += document.getElementById("tabb").outerHTML;
                //args.content += document.getElementById("legTag").outerHTML;
                document.getElementById("tabb").style.visibility="hidden"
                args.styles += "<style>.node.Occupied rect {fill: "+g.showColor.node+"!important;}[node-id] text {fill:"+g.showColor.text+"!important;}.node.Vacant rect {fill:"+g.showColor.vacant+"!important;}<style>";
              });
         
          
          }
        
        },
        without: function (domEl, x, orderBy) {
            var mixedLayoutThreshold = 4;
            var pagingThreshold = 6;
            console.log(orderBy)
            OrgChart.MIXED_LAYOUT_ALL_NODES = false;
            OrgChart.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN = true;
    
            OrgChart.templates.split.size = [0, 0];
            OrgChart.templates.split.node = '';
            OrgChart.templates.split.link = '<path stroke-linejoin="round" stroke="#808080" stroke-width="3px" fill="none" d="{rounded}" />';
    
            OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
            OrgChart.templates.myTemplate.size = [200, 100];
            OrgChart.templates.myTemplate.img_0 = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="1" y="1"  width="78" height="78"></image>';
    
        OrgChart.templates.myTemplate.node = 
                '<rect x="0" y="0" height="25" width="{w}" fill="#4f81bd" stroke-width="3" stroke="#808080"></rect>'
                + '<rect x="160" y="0" height="25" width="40" fill="#fff" stroke-width="3" stroke="#808080"></rect>'
                + '<rect x="0" y="25" height="50" width="{w}" fill="#fff" stroke-width="3" stroke="#808080"></rect>'
                + '<rect x="0" y="75" height="25" width="100" fill="#a6a59a"  stroke-width="3" stroke="#808080"></rect>'
                + '<rect x="100" y="75" height="25" width="100" fill="#e2eafb" stroke-width="3" stroke="#808080"></rect>';
            OrgChart.templates.myTemplate.link = '<path stroke-linejoin="round" stroke="#808080" stroke-width="3px" fill="none" d="{rounded}" />';
            OrgChart.templates.myTemplate.nodeMenuButton = 
            '<g style="cursor:pointer;" transform="matrix(1,0,0,1,10,11)" data-ctrl-n-menu-id="{id}">'
                + '<rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>'
                + '<circle cx="0" cy="0" r="2" fill="red"></circle>'
                + '<circle cx="7" cy="0" r="2" fill="red"></circle>' 
                + '<circle cx="14" cy="0" r="2" fill="red"></circle>'
            + '</g>';
            OrgChart.templates.myTemplate.field_0 = '<text width="153" text-overflow="ellipsis" style="font-size: 10px;" fill="#fff" x="85" y="18" text-anchor="middle">{val}</text>';
            OrgChart.templates.myTemplate.field_1 = '<text width="192" text-overflow="multiline" style="font-size: 10px;" fill="#757575" x="100" y="57" text-anchor="middle">{val}</text>';
            OrgChart.templates.myTemplate.field_2 = '<text width="38" text-overflow="ellipsis" style="font-size: 10px;" fill="#808080" font-weight="bold" x="180" y="19" text-anchor="middle">{val}</text>';
            OrgChart.templates.myTemplate.field_3 = '<text width="98" text-overflow="ellipsis" style="font-size: 10px;" fill="#fff" font-weight="bold" x="50" y="94" text-anchor="middle">{val}</text>';
            OrgChart.templates.myTemplate.field_4 = '<text width="98" text-overflow="ellipsis" style="font-size: 10px;" fill="#808080" font-weight="bold" x="150" y="94" text-anchor="middle">{val}</text>';
            OrgChart.templates.myTemplate.exportMenuButton =
            '<div class="tooltip" style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" control-export-menu="">' +
            '<hr style="background-color: black; margin:10px 0;height:3px; border: none;">' +
            '<hr style="background-color: black; margin:10px 0;height:3px; border: none;">' +
            '<hr style="background-color: black; margin:10px 0;height:3px; border: none;">' +
            "</div>";
            OrgChart.templates.myTemplate.minus = "";
            OrgChart.templates.myTemplate.plus = "";
    
            OrgChart.templates.see_more = Object.assign({}, OrgChart.templates.myTemplate);
            OrgChart.templates.see_more.size = [200, 40];
            OrgChart.templates.see_more.node = '<rect x="0" y="3" height="{h}" width="{w}" fill="#fff" stroke-width="0"></rect>';
            OrgChart.templates.see_more.see_more_field = '<text  style="font-size: 16px;pointer-events: none;" fill="#039BE5" x="100" y="22" text-anchor="middle">See ({val}) more...</text>';
    
    
    
            var chart = new OrgChart(document.getElementById('tree'), {
                enableDragDrop: true,
                levelSeparation: 30,
                subtreeSeparation: 30,
                nodeMouseClick: OrgChart.action.none,
                toolbar: {
                  zoom: true,
                  fit: true,
                  expandAll: false,
                },
                showXScroll: OrgChart.scroll.visible,
                showYScroll: OrgChart.scroll.visible,
                mouseScrool: OrgChart.action.none,
        
                enableSearch: false,
                template: "myTemplate",
                nodes: x,
                menu: {
                  Export: {
                    text: "Export Chart",
                    icon: OrgChart.icon.svg(18, 18),
                    onClick: this.download,
                  },
                  pdf: {
                    text: "Export PDF",
                   
                    icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
                   
                  },
                  png: {
                    text: "Export PNG",
                  },
                },
                nodeMenu: {
                  levelDown: {
                    text: "Level Down",
                    icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
                    onClick: this.addChildDataToChart,
                  },
                  allLevel:
                  {
                    text:"Expand all siblings",
                    onClick:this.expandLevelChild,
                    icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
        
                  },
                  exportProfile: {
                    text: "View Profile",
                    icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
                    onClick: this.exportUserProfile,
                  },
                  edit: {
                    text: "Edit",
                  },
                },
                sticky: false,
                tags: {
                    subLevels0: {
                      subLevels: 1,
                      levelSeparation: 10,
                    },
                    subLevels1: {
                      subLevels: 2,
                      levelSeparation: 10,
                    },
                    subLevels2: {
                      subLevels: 3,
                      levelSeparation: 10,
                    },
                    subLevels3: {
                      subLevels: 4,
                      levelSeparation: 10,
                    },
                    subLevels4: {
                      subLevels: 5,
                      levelSeparation: 10,
                    },
                    subLevels5: {
                      subLevels: 6,
                      levelSeparation: 10,
                    },
                    subLevels6: {
                      subLevels: 7,
                      levelSeparation: 10,
                    },
                    subLevels7: {
                      subLevels: 8,
                      levelSeparation: 10,
                    },
                    subLevels8: {
                      subLevels: 9,
                      levelSeparation: 10,
                    },
                    subLevels9: {
                      subLevels: 10,
                      levelSeparation: 10,
                    },
                    RootNode: {
                      nodeMenu: {
                        levelUp: {
                          text: "Level Up",
                          icon: OrgChart.icon.add(18, 18, "#7A7A7A"),
                          onClick: this.addChildDataToChart,
                        },
                        exportProfile: {
                          text: "View Profile",
                          icon: OrgChart.icon.pdf(18, 18, "#7A7A7A"),
                          onClick: this.exportUserProfile,
                        },
                        edit: {
                          text: "Edit",
                        },
                      },
                    },
                    assistant: {
                      template: "belinda",
                    },
                     nonImage: {
                      template: "ula",
                    },
                    dummy: {
                      template: "deborah",
                      nodeMenu: {},
                    },
                  },
                nodeBinding: {
                    field_0: "userName",
                    field_1: "positionTitle",
                    field_2: "userPayGrade",
                    field_3: "userPayGrade",
                    field_4: "userPayGrade",
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
                if (args.action == OrgChart.action.init || (args.action == OrgChart.action.expand && args.actionParams.id == args.pnode.id)) {
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
    
    
    
                for ( i = 0; i < args.childrenIds.length; i++) {
                    var cnode = args.nodes[args.childrenIds[i]];
                    if (cnode.templateName != 'see_more') {
                        cnode.templateName = 'myTemplate';
                        cnode.w = OrgChart.templates.myTemplate.size[0];
                        cnode.h = OrgChart.templates.myTemplate.size[1];
                    }
                }
    
                if (args.childrenIds.length <= mixedLayoutThreshold) {
                    args.layout = OrgChart.mixed;
                }
            });
    
    
            
    

        
    }
}
