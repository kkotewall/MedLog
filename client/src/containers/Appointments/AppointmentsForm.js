// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

// Style for add appointments form.
const styles = {
  textField: {
    marginTop: 40,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#007AC1',
    maxWidth: '85%',
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
};

class AppointmentsForm extends React.Component {
  handleDoctorMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleAppointmentDoctorChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes, doctors, clinics } = this.props;
    console.log(doctors);
    console.log(clinics);

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Add an appointment
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="appointment-name"
                label="Reason for Visit"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.appointmentName}
                onChange={this.props.handleAppointmentNameChange}
              />

              <FormControl className={classes.formControl} fullWidth>
              <TextField 
                id='doctor'
                select
                label='Select a doctor'
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField} 
                value={this.state.value}
                onChange={this.handleDoctorMenuOption} 
                SelectProps={{ name: 'value'}} 
                margin="normal">
                  {doctors.map(doctor => {
                    return <MenuItem value={doctor.lastname}>Dr. {doctor.lastname}</MenuItem>;
                  })}
                </TextField>
              </FormControl>

              <TextField
                id="appointment-date"
                label="Appointment date"
                type="date"
                defaultValue="MM-DD-YYYY"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.appointmentDate}
                onChange={this.props.handleAppointmentDateChange}
              />

              <TextField
                id="appointment-time"
                label="Appointment time"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.appointmentTime}
                onChange={this.props.handleAppointmentTimeChange}
              />

              <Button 
                size="large" 
                className={classes.button} 
                onClick={this.props.handleFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AppointmentsForm);
