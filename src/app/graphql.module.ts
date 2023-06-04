import { HttpLink } from 'apollo-angular/http';
import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache , ApolloLink} from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { setContext } from '@apollo/client/link/context';

const uri = 'http://localhost:4000/'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));
 
  const auth = setContext((operation, context) => {
    const token = localStorage.getItem('token');
 
    if (token) { 
       
    return {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-apollo-operation-name":"true"
        },
      };
    }
    return{
      headers: {
        "x-apollo-operation-name": "true"
      }
    }
      
    
  });
 
  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();
 
  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [HttpClientModule,ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}