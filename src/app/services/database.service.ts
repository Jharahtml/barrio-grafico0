import { Injectable, Injector, runInInjectionContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, Query } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { arrayUnion } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    public http: HttpClient,
    public firestore: AngularFirestore,
    private injector: Injector,
    //private afs: AngularFirestore
  ) { }

  // Lee un archivo json en la carpeta /assets/db/ NOMBRE
  fetchLocalCollection(collection: string) {
    return this.http.get('assets/db/' + collection + '.json');
  }

  // Lee todos los registros de una colección en Fire Store
  fetchFirestoreCollection(collection: any): Observable<any[]> {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collection).valueChanges({ idField: 'id' });
    });
  }

  // Guardar un documento en firestore, si no existe la colección la crea
  addFirestoreDocument(collectionName: string, collectionData: any) {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collectionName).add(collectionData);
    });
  }

  // Actualiza la información de un documento o registro
  updateFireStoreDocument(collection: string, uid: string, data: any) {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collection).doc(uid).update(data);
    });
  }
  get arrayUnion() {
    return arrayUnion;
  }
  // Elimina un documento o registro
  deleteFireStoreDocument(collection: string, id: string): Promise<void> {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collection).doc(id).delete();
    });
  }

  // Recupera un documento o registro por su UID
  getDocumentById(collection: string, uid: string): Observable<any> {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collection).doc(uid).valueChanges({ idField: 'id' });
    });
  }

  // Busca todos los registros o documentos de una colección que coincidan con los parámetros buscados
  getCollectionByCustomparam(collection: string, customParam: string, searched: string): Observable<any> {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collection, ref => ref.where(customParam, '==', searched))
        .valueChanges({ idField: 'id' });
    });
  }

  // Búsqueda por texto que empieza con un string
  searchCollectionByFieldPrefix(
    collection: string,
    field: string,
    searchText: string
  ): Observable<any[]> {
    const endText = searchText.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1));

    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collection, ref =>
        ref.where(field, '>=', searchText).where(field, '<', endText)
      ).valueChanges({ idField: 'id' });
    });
  }

  // Consulta dinámica con múltiples filtros
  getCollectionByFilters(
    collection: string,
    filters: { field: string, operator: firebase.default.firestore.WhereFilterOp, value: any }[],
    orderByField?: string,
    orderDirection: 'asc' | 'desc' = 'asc',
    limitResults?: number
  ): Observable<any[]> {
    return runInInjectionContext(this.injector, () => {
      return this.firestore.collection(collection, ref => {
        let query: firebase.default.firestore.CollectionReference | firebase.default.firestore.Query = ref;
        // Aplicar filtros dinámicamente
        filters.forEach(filter => {
          query = query.where(filter.field, filter.operator, filter.value);
        });
        // Aplicar ordenamiento si existe
        if (orderByField) {
          query = query.orderBy(orderByField, orderDirection);
        }
        // Limitar resultados si se pidió
        if (limitResults) {
          query = query.limit(limitResults);
        }
        return query;
      }).valueChanges({ idField: 'id' });
    });
  }
//Obtener las cartas de un usuario específico

getCartas(uid: string): Observable<any[]> {
  return runInInjectionContext(this.injector, () => {
    return this.firestore.collection(`users/${uid}/cartas`).valueChanges({ idField: 'id' });
  });
}
  
//1ra. Subcolección
getSubcollection<T>(collectionName: string, docId: string, subcollectionName: string) {
  return this.firestore.collection(collectionName)
    .doc(docId)
    .collection<T>(subcollectionName)
    .valueChanges({ idField: 'id' });
}

// 2. Una versión protegida por runInInjectionContext
getSubcollectionSafe<T>(collectionName: string, docId: string, subcollectionName: string): Observable<T[]> {
  const path = `${collectionName}/${docId}/${subcollectionName}`;
  return runInInjectionContext(this.injector, () => {
    return this.firestore.collection<T>(path).valueChanges({ idField: 'id' });
  });
}
  
addToSubcollection(path: string, data: any) {
  return runInInjectionContext(this.injector, () => {
    return this.firestore.collection(path).add(data);
  });
}
//solicitudes de amistad
async enviarSolicitudAmistad(miUid: string, amigoId: string, amigoData: any) {
  return runInInjectionContext(this.injector, async () => {
    const envioRef = this.firestore.collection(`users/${miUid}/solicitudes_enviadas`);
    const reciboRef = this.firestore.collection(`users/${amigoId}/solicitudes_recibidas`);

    await envioRef.doc(amigoId).set({
      ...amigoData,
      estado: 'pendiente',
      timestamp: new Date()
    });

    await reciboRef.doc(miUid).set({
      estado: 'pendiente',
      timestamp: new Date()
    });
  });
}

// Verificar si ya fue enviada
checkSolicitudEnviada(miUid: string, amigoId: string) {
  return this.firestore.doc(`users/${miUid}/solicitudes_enviadas/${amigoId}`).valueChanges();
}

//cancelar una solicitud de amistad
async cancelarSolicitud(miUid: string, amigoId: string) {
  return runInInjectionContext(this.injector, async () => {
    const envioRef = this.firestore.collection(`users/${miUid}/solicitudes_enviadas`).doc(amigoId);
    const reciboRef = this.firestore.collection(`users/${amigoId}/solicitudes_recibidas`).doc(miUid);

    await envioRef.delete();
    await reciboRef.delete();
  });
}
/* async findDocumentInSubcollection(path: string, field: string, value: any): Promise<any | null> {
    const snapshot = await firstValueFrom(
      this.afs.collection(path, ref => ref.where(field, '==', value)).get()
    );

    return snapshot.empty ? null : snapshot.docs[0].data();
  } */
}