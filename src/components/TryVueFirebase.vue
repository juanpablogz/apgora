<template>
  <div class="try-vue-fire">
		<div class="columns is-mobile">
			<div class="column"></div>
			<div class="column">
				<h1>Estoy en landing</h1>
				<section>
					<label for="" class="label-form">Nombre</label>
					<b-input v-model="user.name"></b-input>

					<label for="" class="label-form">Apellidos</label>
					<b-input v-model="user.lastName"></b-input>

				</section>					
			</div>
			<div class="column"></div>
		</div>			
		<div class="columns is-mobile">
			<div class="column">
				<b-button variant="danger" @click="deleteAll(user)" type="is-danger" icon-right="trash">x</b-button>				    
			</div>
			<div class="column">
				<table class="" v-if="Object.keys(hosts).length > 0">
					<thead>
						<tr>
							<th class="" style="width: 40px;">
								Apellido
							</th>						
							<th class="" style="width: 40px;">
								Nombre
							</th>
							<th class="" style="width: 40px;">
								Eliminar
							</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(user, indexUser) in Object.keys(hosts)" :key="indexUser">
							<td>
								<b-input :value="hosts[user]['name']" @input="updateAttribute(user+'/name', $event)"/>
							</td>
							<td>
								<b-input :value="hosts[user]['lastName']" @input="updateAttribute(user+'/lastName', $event)"/>
							</td>
							<td>
								<b-button variant="success" @click="deleteElement(user)" type="is-warning" icon-right="trash">x</b-button>  	
							</td>
						</tr>
					</tbody>
				</table>						
			</div>
			<div class="column">
				<b-button variant="primary" @click="addElement" type="is-primary" icon-right="plus">+</b-button>
			</div>
		</div>			
  </div>
</template>

<script>

import { dataBase, firebaseInstance } from './../../firebase'

export default {
  name: 'TryVueFire',
  components: {
    // HelloWorld
  },
  data() {
    return {
			hosts: {},
			user: {
				lastName: '',
				name: ''
			}
    }
  },
  methods: {
    addElement() {
      dataBase.ref('hosts').push(this.user)      
		},
		updateAttribute(path, $event){
			dataBase.ref('hosts/'+path).set($event).then(() => {
				console.log("update")
			},(err) => {
				console.log("deleteElement " + JSON.stringify(err))
			})
		},
		deleteElement(user){
			dataBase.ref('hosts/'+user).remove().then(() => {
				console.log("delete")
			},(err) => {
				console.log("deleteElement " + JSON.stringify(err))
			})
		},
		deleteAll(){
			dataBase.ref('hosts').remove().then(() => {
				console.log("delete")
			},(err) => {
				console.log("deleteElement " + JSON.stringify(err))
			})
		}		
  },
  firebase: {    
    hosts: dataBase.ref('hosts'),
  }
}
</script>
<style>
	.label-form{
		float: left;
	}
</style>