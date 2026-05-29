import { AppBar, Toolbar, IconButton, Badge, Avatar, InputBase, Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Find Jobs", to: "/jobs" },
  { label: "Applications", to: "/applications" },
//   { label: "Saved", to: "/saved" },
  { label: "Profile", to: "/profile/edit" },
];

export default function Navbar({ onMenuClick }) {
  const loc = useLocation();
  const isActive = (to) => loc.pathname === to || loc.pathname.startsWith(to + "/");

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "#1D1D1B", borderBottom: "2px solid #C74634", height: 64, justifyContent: "center" }}
    >
      <Toolbar sx={{ minHeight: "64px !important", gap: { xs: 1, md: 2 }, px: { xs: 1.5, md: 3 } }}>
        <IconButton
          size="small"
          onClick={onMenuClick}
          sx={{ color: "white", display: { xs: "inline-flex", md: "none" } }}
          aria-label="Open menu"
        >
          <MenuIcon />
        </IconButton>

        <Link to="/dashboard" className="flex items-center gap-2 no-underline">
          <Box sx={{ width: 36, height: 24, bgcolor: "#C74634", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 12, letterSpacing: 1 }}>
            ORA Logo
          </Box>
          {/* <span className="text-white font-semibold tracking-tight hidden sm:inline">OraTechi's</span> */}
        </Link>

        {/* Top nav links — desktop */}
        <Box sx={{ display: { xs: "none", lg: "flex" }, ml: 3, gap: 0.5 }}>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="no-underline">
              <Box
                sx={{
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 1,
                  fontSize: 13,
                  fontWeight: 500,
                  color: isActive(n.to) ? "#fff" : "rgba(255,255,255,0.75)",
                  bgcolor: isActive(n.to) ? "rgba(199,70,52,0.25)" : "transparent",
                  borderBottom: isActive(n.to) ? "2px solid #C74634" : "2px solid transparent",
                  transition: "all 120ms",
                  "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.06)" },
                }}
              >
                {n.label}
              </Box>
            </Link>
          ))}
        </Box>

        <Box
          sx={{
            ml: { md: 2, lg: 3 },
            flex: 1,
            maxWidth: 420,
            bgcolor: "rgba(255,255,255,0.08)",
            borderRadius: 1,
            px: 1.5,
            py: 0.5,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          <SearchIcon sx={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }} />
          <InputBase placeholder="Search jobs, skills…" sx={{ color: "white", flex: 1, fontSize: 14 }} />
        </Box>

        <Box sx={{ flex: 1 }} />

        <Link to="/notifications" className="no-underline">
          <IconButton size="small" sx={{ color: "white" }}>
            <Badge badgeContent={3} color="primary">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Link>
        <Link to="/profile/edit" className="no-underline">
          <Avatar sx={{ width: 32, height: 32, bgcolor: "#00558B", fontSize: 14 }}>AR logo</Avatar>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
