import { RouterStateSnapshot, Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';
import {PostStoreService } from './post.store.service';

@Injectable()
export class PostsResolverService implements Resolve<boolean> {
    constructor(private postStoreService: PostStoreService) { }
    // note: change to Guard
    resolve(route: ActivatedRouteSnapshot): Observable<boolean> {



        this.postStoreService.loadPosts();
        // wait for the loading process to finish, and then release the
        // user to the route.
        return this.postStoreService.select(state => state.postsLoaded).pipe(
            filter(loaded => loaded),
            take(1)
        );


    }
}