// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';


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
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
  dragndrop: {
    borderStyle: 'dashed',
    padding: 35,
    marginTop: 35,
    textAlign: 'center',
  },
};

class AttachmentsForm extends React.Component {
  constructor(props) {
    super(props);
    state = {
      value: '',
      // uploadURL: '',
    }
    this.handleUpload = this.handleUpload.bind(this);
  }

  render() {
    handleDoctorMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleAppointmentDoctorChange(event);
    }

  render() {
    const { doctors, lab-date, lab-subject} = this.props;
    console.log(doctors);
    console.log(lab-date);
    console.log(lab-subject);


    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add attachment
            </Typography>
            <form noValidate autoComplete="off">
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

              <TextField
                id="lab-date"
                label="Date"
                type="date"
                defaultValue="MM-DD-YYYY"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.attachentDate}
                onChange={this.props.handleAttachmentDateChange}
              />

              <TextField
                id="lab-subject"
                label="Subject"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.attachmentSubject}
                onChange={this.props.handleAttachmentSubjectChange}
              />

              <Button size="large" color="primary" variant="raised" className={classes.button} onClick={this.props.handleConfirmForm}>
                Confirm Information
              </Button>

              <Uploadform onSubmit={this.handleUpload}>
                <div>
                  <input ref={(ref) => { this.uploadInput = ref; }} type="file-input" />
                </div>
                <div>
                // future either uses uuid (webpack problems last try) or this will be assigned the Mongo ID
                  <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter file key name" />
                </div>
                <br />
                <div>
                  <button>Upload</button>
                </div>
                // may not want to render preview because we have to "destroy" it later so it isn't saved in cookies/may result privacy leaks... need more info
                // <img src={this.state.uploadURL} alt="img" />
              </form>

              <Button size="large" color="primary" variant="raised" className={classes.button} onClick={this.props.handleUploadSubmit}>
                Add attachment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AttachmentsForm);
