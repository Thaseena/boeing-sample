import { Routes, RouterModule, RouterOutlet } from '@angular/router';

// import { HeaderComponent } from './layout/header/header.component';
// import { MenuComponent } from './layout/menu/menu.component';
// import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
// import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AddsupplierComponent } from 'src/app/supplier/addsupplier/addsupplier.component';
import { AdduserComponent } from 'src/app/user/adduser/adduser.component';
import { UserlistComponent } from 'src/app/user/userlist/userlist.component';
import { EdituserComponent } from 'src/app/user/edituser/edituser.component';
import { UserdetailsComponent } from 'src/app/user/userdetails/userdetails.component';
import { RolelistComponent } from 'src/app/role/rolelist/rolelist.component';
import { AddroleComponent } from 'src/app/role/addrole/addrole.component';
import { EditroleComponent } from 'src/app/role/editrole/editrole.component';
import { SupplierlistComponent } from 'src/app/supplier/supplierlist/supplierlist.component';
import { EditsupplierComponent } from 'src/app/supplier/editsupplier/editsupplier.component';
import { SupplierdetailsComponent } from 'src/app/supplier/supplierdetails/supplierdetails.component';
import { AssessmentlistComponent } from 'src/app/assessment/assessmentlist/assessmentlist.component';
import { AddsupplierassessmentComponent } from 'src/app/assessment/addsupplierassessment/addsupplierassessment.component';
import { SupplierassessmentdetailsComponent } from 'src/app/assessment/supplierassessmentdetails/supplierassessmentdetails.component';
import { AssessmentdetailsComponent } from 'src/app/assessment/assessmentdetails/assessmentdetails.component';
import { ComparelistComponent } from 'src/app/compare/comparelist/comparelist.component';
import { ComparisonComponent } from 'src/app/compare/comparison/comparison.component';

const appRoutes: Routes = [
    //For breadcrumb : https://www.npmjs.com/package/ngx-breadcrumbs
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {
        menu: {
          title: 'PAGE_TITLE',
          pathMatch: 'prefix',
          hidden: true
          }
      }
    },
    {
      path: 'home',
      data: {
        breadcrumbs: true,
        text: 'Home'
      },
      children: [
        {
            path: '',
            component: SearchResultComponent
        },
        {
            path: 'search-results',
            component: SearchResultComponent,
            data: {
              breadcrumbs: 'Search Result'
            }
        }
      ]
    },
    {
      path: 'supplier',
      data: {
        breadcrumbs: true,
        text: 'Home'
      },
      children: [
        {
            path: '',
            component: SupplierlistComponent,
            data: {
              breadcrumbs: 'Supplier Management'
            }
        },
        {
            path: 'supplierlist',
            component: SupplierlistComponent,
            data: {
              breadcrumbs: 'Supplier List'
            }
        },
        {
          path: 'addsupplier',
          pathMatch: 'full',
          component: AddsupplierComponent,
          data: {
            breadcrumbs: true,
            text: 'Add New Supplier'
          }
        },
        {
          path: 'editsupplier',
          pathMatch: 'full',
          component: EditsupplierComponent,
          data: {
            breadcrumbs: true,
            text: 'Edit New Supplier'
          }
        },
        {
          path: 'supplierdetails',
          pathMatch: 'full',
          component: SupplierdetailsComponent,
          data: {
            breadcrumbs: true,
            text: 'John Smith'
          }
        }
      ]
    },
    {
      path: 'assessment',
      data: {
        breadcrumbs: true,
        text: 'Home'
      },
      children: [
        {
            path: '',
            component: AssessmentlistComponent,
            data: {
              breadcrumbs: 'Assessment Directory'
            }
        },        
        {
          path: 'addsupplierassessment',
          pathMatch: 'full',
          component: AddsupplierassessmentComponent,
          data: {
            breadcrumbs: true,
            text: 'Add New Supplier Assessment'
          }
        },
        {
          path: 'supplierassessmentdetails',
          pathMatch: 'full',
          component: SupplierassessmentdetailsComponent,
          data: {
            breadcrumbs: true,
            text: 'Pi'
          }
        },
        {
          path: 'assessmentdetails',
          pathMatch: 'full',
          component: AssessmentdetailsComponent,
          data: {
            breadcrumbs: true,
            text: 'Assessment Details'
          }
        }       
      ]
    },
    {
      path: 'user',
      data: {
        breadcrumbs: true,
        text: 'Home'
      },
      children: [
        {
            path: '',
            component: UserlistComponent,
            data: {
              breadcrumbs: 'User Management'
            }
        },
        {
            path: 'userlist',
            component: UserlistComponent,
            data: {
              breadcrumbs: 'User List'
            }
        },
        {
          path: 'adduser',
          pathMatch: 'full',
          component: AdduserComponent,
          data: {
            breadcrumbs: true,
            text: 'Add User'
          }
        },
        {
          path: 'edituser',
          pathMatch: 'full',
          component: EdituserComponent,
          data: {
            breadcrumbs: true,
            text: 'Edit User'
          }
        },
        {
          path: 'userdetails',
          pathMatch: 'full',
          component: UserdetailsComponent,
          data: {
            breadcrumbs: true,
            text: 'John'
          }
        }
      ]
    },
    {
      path: 'role',
      data: {
        breadcrumbs: true,
        text: 'Home'
      },
      children: [
        {
            path: '',
            component: RolelistComponent,
            data: {
              breadcrumbs: 'Role Management'
            }
        },
        {
            path: 'rolelist',
            component: RolelistComponent,
            data: {
              breadcrumbs: 'Role List'
            }
        },
        {
          path: 'addrole',
          pathMatch: 'full',
          component: AddroleComponent,
          data: {
            breadcrumbs: true,
            text: 'Add New Role'
          }
        },
        {
          path: 'editrole',
          pathMatch: 'full',
          component: EditroleComponent,
          data: {
            breadcrumbs: true,
            text: 'Edit Role'
          }
        }
      ]
    },
    {
      path: 'compare',
      data: {
        breadcrumbs: true,
        text: 'Home'
      },
      children: [
        {
            path: '',
            component: ComparelistComponent,
            data: {
              breadcrumbs: 'Compare'
            }
        },
        {
          path: 'comparsion',
          component: ComparisonComponent,
          data: {
            breadcrumbs: 'Compare'
          }
        }
      ]
    },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
