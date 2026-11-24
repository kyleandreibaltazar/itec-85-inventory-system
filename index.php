<?php
$isHttps = !empty($_SERVER["HTTPS"]) && strtolower((string) $_SERVER["HTTPS"]) !== "off";
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Permissions-Policy: camera=(), microphone=(), geolocation=()");
header(
    "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
);
if ($isHttps) {
    header("Strict-Transport-Security: max-age=31536000; includeSubDomains");
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>CvSU Inventory Management System</title>
    <link rel="icon" href="assets/logo.png" />
    <link rel="stylesheet" href="assets/css/styles.css" />
  </head>
  <body>
    <section id="login-view" class="login-shell" aria-label="Administrator sign in">
      <div class="login-left">
        <div>
          <img class="brand-logo" src="assets/logo.png" alt="CvSU inventory logo" />
          <div class="brand-subtitle">Inventory Management System</div>
          <div class="brand-uni">Cavite State University</div>

          <div class="login-divider"></div>

          <div style="margin-top: 34px">
            <div class="login-eyebrow">Built for your campus</div>
            <h1 class="login-hero-title">Campus inventory,<br />under control.</h1>
            <p class="login-hero-desc">
              A single, secure workspace to manage university equipment, monitor stocks, and keep
              every record in order.
            </p>

            <div class="login-features">
              <div class="login-feature-item">
                <div class="login-feature-icon" data-icon="box"></div>
                <div>
                  <div class="login-feature-title">Know what’s available</div>
                  <div class="login-feature-desc">Track equipment and supplies in one place.</div>
                </div>
              </div>
              <div class="login-feature-item">
                <div class="login-feature-icon" data-icon="swap"></div>
                <div>
                  <div class="login-feature-title">Keep every movement recorded</div>
                  <div class="login-feature-desc">Stay on top of stock-ins and stock-outs.</div>
                </div>
              </div>
              <div class="login-feature-item">
                <div class="login-feature-icon" data-icon="shield"></div>
                <div>
                  <div class="login-feature-title">Manage with confidence</div>
                  <div class="login-feature-desc">
                    Secure access for authorized university staff.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="login-divider" style="margin-bottom: 0"></div>
      </div>

      <div class="login-right">
        <form id="login-form" class="login-card" novalidate>
          <div class="login-portal-label">Administrator Portal</div>
          <h2 class="login-card-title">Welcome back</h2>
          <p class="login-card-sub">Sign in to access your inventory workspace.</p>

          <div class="form-group">
            <label class="form-label" for="login-email">Email address</label>
            <div class="input-wrap">
              <span class="input-icon-left" data-icon="mail"></span>
              <input
                id="login-email"
                type="email"
                class="form-control has-left-icon"
                placeholder="Enter your university email"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="login-password">Password</label>
            <div class="input-wrap">
              <span class="input-icon-left" data-icon="lock"></span>
              <input
                id="login-password"
                type="password"
                class="form-control has-left-icon has-right-icon"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                id="toggle-password"
                class="input-icon-right"
                title="Show/hide password"
                data-icon="eye"
              ></button>
            </div>
          </div>

          <div class="login-row">
            <span></span>
            <button type="button" id="forgot-password-btn" class="link-btn">
              Forgot password?
            </button>
          </div>

          <button type="submit" class="btn btn-primary login-submit">
            <span></span>
            <span>Sign in</span>
            <span data-icon="arrowRight"></span>
          </button>

          <div class="login-card-footer">Need access? Contact your system administrator.</div>
          <button type="button" id="show-setup-btn" class="link-btn hidden">Set up the first administrator</button>
        </form>

        <form id="setup-form" class="login-card hidden" novalidate>
          <div class="login-portal-label">First-time setup</div>
          <h2 class="login-card-title">Create administrator</h2>
          <p class="login-card-sub">Set up the first administrator account to begin.</p>

          <div class="form-group">
            <label class="form-label" for="setup-name">Administrator name</label>
            <input id="setup-name" class="form-control" autocomplete="name" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="setup-email">Administrator email</label>
            <input id="setup-email" type="email" class="form-control" autocomplete="email" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="setup-password">Password</label>
            <input id="setup-password" type="password" class="form-control" autocomplete="new-password" minlength="12" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="setup-key">One-time setup key</label>
            <input id="setup-key" type="password" class="form-control" autocomplete="off" required />
          </div>
          <button type="submit" class="btn btn-primary login-submit">
            <span></span>
            <span>Create administrator</span>
            <span data-icon="arrowRight"></span>
          </button>
          <div class="login-card-footer">
            Set INVENTORY_SETUP_KEY in the server environment before first-time setup.
          </div>
        </form>

        <div class="login-copyright">© 2026 Cavite State University. All rights reserved.</div>
      </div>
    </section>

    <div id="app-view" class="app-shell hidden">
      <div id="sidebar-overlay" class="sidebar-overlay"></div>

      <aside id="sidebar" class="sidebar">
        <div class="sidebar-brand">
          <img class="brand-logo" src="assets/logo.png" alt="CvSU inventory logo" />
          <div class="brand-subtitle">Inventory Management System</div>
          <div class="brand-uni">Cavite State University</div>
        </div>

        <div class="sidebar-nav-wrap">
          <div class="sidebar-section-label">Workspace</div>
          <nav class="nav-list" id="sidebar-nav"></nav>
        </div>

        <div class="sidebar-footer">
          <button id="signout-btn" class="signout-btn">
            <span data-icon="logout"></span>
            <span>Sign out</span>
          </button>
          <span class="version-tag">v1.0</span>
        </div>
      </aside>

      <div class="main-wrap">
        <header class="topbar">
          <div class="topbar-left">
            <button
              id="mobile-menu-btn"
              class="mobile-menu-btn"
              data-icon="menu"
              aria-label="Open menu"
            ></button>
            <div id="topbar-title" class="topbar-title">Dashboard</div>
          </div>

          <div class="topbar-right">
            <button id="global-search-btn" class="global-search-trigger" type="button">
              <span class="global-search-left">
                <span data-icon="search"></span>
                <span>Search inventory...</span>
              </span>
              <span class="kbd-chip">⌘ K</span>
            </button>

            <div style="position: relative">
              <button
                id="notif-btn"
                class="topbar-icon-btn"
                type="button"
                aria-label="Notifications"
              >
                <span data-icon="bell"></span>
                <span id="notif-dot" class="notif-dot"></span>
              </button>
              <div id="notif-popover" class="notif-popover hidden"></div>
            </div>

            <div class="topbar-divider"></div>

            <button id="profile-btn" class="profile-pill" type="button">
              <div class="profile-avatar" data-icon="shield"></div>
              <div class="profile-info">
                <div class="profile-name">Loreyn E</div>
                <div class="profile-role">Administrator</div>
              </div>
              <span data-icon="chevronDown" style="color: var(--text-muted)"></span>
            </button>
          </div>
        </header>

        <main id="page-content" class="page-content"></main>
      </div>
    </div>

    <div id="modal-root"></div>
    <div id="toast-stack" class="toast-stack"></div>

    <script src="assets/js/app.js?v=20261125a"></script>
  </body>
</html>
