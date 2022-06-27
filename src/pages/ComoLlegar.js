import { Table } from "react-bootstrap"
import { GeoAltFill,Star,StarFill,StarHalf } from "react-bootstrap-icons"


const ComoLlegar = () => {
    return (
        <Table responsive="md" className="marginb letra">
        <thead>
          <tr>
            <th>Ubicacion</th>
            <th>Localidad</th>
            <th>Puntuacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><GeoAltFill className="icones"/>Av.Boulevard BsAs 1702</td>
            <td>Monte Grande</td>
            <td><StarFill/><StarFill/><StarFill/><StarFill/><Star/></td>
          </tr>
          <tr>
            <td><GeoAltFill className="icones"/>Formosa 653</td>
            <td>Cannig</td>
            <td><StarFill/><StarFill/><StarFill/><StarFill/><StarHalf/></td>
          </tr>
          <tr>
            <td><GeoAltFill className="icones"/> Av. Hipólito Yrigoyen 10699</td>
            <td>Temperley</td>
            <td><StarFill/><StarFill/><StarFill/><Star/><Star/></td>
          </tr>
        </tbody>
      </Table>
        )
    
    
}

export default ComoLlegar