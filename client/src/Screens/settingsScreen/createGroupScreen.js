import { DataGrid } from "@mui/x-data-grid";
import { TextField, Box, Button } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  { field: "id", headerName: "S/N", width: 100 },
  { field: "groupName", headerName: "Group Name", width: 800 },
  { field: "dateCreate", headerName: "Date Created", width: 350 },
  {
    field: "createBy",
    headerName: "Created By",
    width: 350,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 100,
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    groupName: "Group 1",
    dateCreate: "26/11/2023",
    createBy: "Name1",
    edit: <EditIcon />,
    delete: <DeleteIcon />,
  },
  {
    id: 2,
    groupName: "Group 2",
    dateCreate: "26/11/2023",
    createBy: "Name1",
    edit: <EditIcon />,
    delete: <DeleteIcon />,
  },
  {
    id: 3,
    groupName: "Group 3",
    dateCreate: "26/11/2023",
    createBy: "Name5",
    edit: <EditIcon />,
    delete: <DeleteIcon />,
  },
  {
    id: 4,
    groupName: "Group 4",
    dateCreate: "26/11/2023",
    createBy: "Name3",
    edit: <EditIcon />,
    delete: <DeleteIcon />,
  },
];

function CreateGroupScreen() {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Create Group</h2>
      <hr />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <GroupsIcon sx={{ color: "action.active", mr: 2, my: 2 }} />
        <TextField
          autoFocus
          fullWidth
          id="newGroupInput"
          label="Group Name"
          variant="outlined"
        />
      </Box>
      <Button variant="contained" style={{ width: "100%", height: "50px" }}>
        <GroupAddIcon style={{ paddingRight: "10px" }} />
        Add Group
      </Button>

      <div style={{ height: 500, width: "100%", marginTop: "20px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={1}
          rowsPerPageOptions={3}
        />
      </div>
    </div>
  );
}

export default CreateGroupScreen;
