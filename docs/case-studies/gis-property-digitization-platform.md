# Government GIS Property Assessment Platform

### Digitizing and Mapping Real Property Records for the Department of Assessment, Local Government Unit

## 1. Project Overview

The Government GIS Property Assessment Platform is a Laravel-based government information system built for the Department of Assessment, Local Government. It was designed to modernize property assessment operations by digitizing legacy records, centralizing valuation data, and enabling map-based property analysis.

The platform addresses a high-volume public-sector workflow spanning multiple districts and barangays, where records were historically fragmented across paper archives, siloed systems, and disconnected document repositories. By combining transaction processing, document digitization, and GIS visualization, the system provides a single operational layer for assessment, verification, and reporting.

## 2. The Problem

Before the platform, assessment teams faced systemic operational bottlenecks:

- Paper-based tax declarations and supporting documents made retrieval slow and error-prone.
- Manual search and reconciliation workflows consumed staff time and delayed public service transactions.
- Auditability was limited due to inconsistent tracking of record changes and document movement.
- Data lived across disconnected systems, making cross-referencing property history difficult.
- Geographic analysis of valuation data was limited without integrated parcel mapping.

The net effect was low transparency, long processing times, and limited decision support for planning and taxation.

## 3. The Solution

A unified digitization and GIS-enabled assessment platform was implemented to make property records searchable, traceable, and spatially analyzable.

Key solution capabilities:

- **Digitization workflow** for ingesting historical records and standardizing metadata.
- **GIS parcel mapping** to visualize valuation data by geography.
- **NAS-backed document storage** for large-scale scanned archives.
- **Certification automation** to reduce manual certificate preparation.
- **Workflow tracking** for end-to-end document and transaction visibility.

This architecture transformed property assessment from a paper-heavy process into a data-driven digital operation.

## 4. System Architecture

```text
Frontend (Vue + Inertia)
        ↓
Laravel API Backend
        ↓
MySQL Database
        ↓
NAS Storage (12TB scanned documents)
        ↓
GIS Layer (KML → polygon → Google Maps)
```

Layer summary:

- **Frontend (Vue + Inertia):** Role-based interfaces for assessment staff, digitization teams, and records operators.
- **Laravel Backend:** Core business logic, validation, workflow orchestration, and API endpoints.
- **MySQL Database:** Transactional records, valuation attributes, workflow states, and historical references.
- **NAS Storage:** Centralized large-file repository for scanned tax declarations and supporting artifacts.
- **GIS Layer:** Converts and renders KML parcel boundaries into polygon-based map visualization for assessment analysis.

## System Architecture Diagram

### Architecture Overview

```text
Frontend (Vue + Inertia)
↓
Laravel API Backend
↓
MySQL Database
↓
Redis Cache Layer
↓
NAS Storage (12TB scanned documents)
↓
GIS Mapping Layer (KML → Polygons → Google Maps)
```

This layered architecture separates presentation, business logic, data persistence, caching, document storage, and geospatial rendering. The frontend handles user workflows, Laravel orchestrates domain and API logic, MySQL stores transactional assessment data, Redis accelerates repeated lookup operations, NAS hosts the long-term scanned archive, and the GIS layer transforms KML data into parcel polygons for map-based analysis.

## Digitization Workflow

### Digitization Processing Pipeline

```text
Encoder
↓
Proofreader
↓
Verifier
```

- **Encoder:** Encodes information from scanned tax declarations into structured records.
- **Proofreader:** Checks encoded entries against scanned source documents for accuracy.
- **Verifier:** Performs final approval and commits validated records to the official dataset.

This pipeline mirrors the real-world QA process of the Department of Assessment.

## NAS Document Retrieval Pipeline

### NAS Document Retrieval Pipeline

```text
User Request
↓
Redis Folder Structure Cache
↓
NAS File Lookup (Synology NAS)
↓
PDF Retrieval
↓
PDF → JPG Conversion (Imagick)
↓
Cached Image Storage (Server NAS)
↓
Fast Image Delivery to Viewer
```

Redis caching reduces repeated SFTP directory scans by serving precomputed folder structure lookups, which lowers retrieval latency and improves document viewer responsiveness under heavy concurrent access.

## 5. Key Engineering Challenges

The project required solving several non-trivial engineering problems:

- **Massive archive handling:** Organizing and serving a very large NAS document tree reliably.
- **Document preview pipeline:** Converting PDFs to web-friendly image previews for faster in-browser review.
- **Caching strategy:** Using Redis to cache heavy folder/index structures and reduce repeated I/O traversal.
- **Property lineage reconstruction:** Rebuilding record history using ARP chains to track ownership/assessment evolution.
- **GIS processing:** Parsing KML, validating geometry, and rendering polygons for map-based operations.

## 6. Core System Modules

### Digitization Workflow

Manages intake, indexing, and quality control of scanned legacy records, enabling consistent metadata and searchable retrieval.

### GIS Parcel Mapping

Transforms geospatial files into interactive map layers for parcel-level valuation analysis and planning support.

### Certification Generator

Automates generation of official assessment-related certifications to reduce turnaround time and manual errors.

### Data Reconciliation Engine

Compares and reconciles records from multiple sources to surface inconsistencies and improve data reliability.

### Transaction Tracking System

Tracks document and record movement across process stages, creating operational transparency and accountability.

### Assessment Reporting Engine

Produces assessment and valuation reports using aggregated data views to support management and policy workflows.

## 7. Data Engineering Pipeline

The platform includes a practical data pipeline for operational and analytical workloads:

- **Excel imports** for bulk onboarding and structured updates.
- **KML GIS imports** for parcel geometry and map layer data.
- **Redis caching** for frequently accessed directory and lookup structures.
- **Database views** for normalized cross-table reporting.
- **Aggregation tables** for faster dashboard/report queries on large datasets.

This pipeline balances transactional integrity with reporting performance, allowing teams to process large records efficiently without compromising day-to-day operations.

## 8. Technology Stack

### Backend

- Laravel (PHP)
- Service-oriented business logic
- API-driven module integration

### Frontend

- Vue.js
- Inertia.js
- Tailwind CSS

### Database

- MySQL
- PostgreSQL / PostGIS (for geospatial workloads where applicable)

### Infrastructure

- NAS storage (large-scale scanned document repository)
- Redis cache
- Linux-based deployment environment

### Data Processing

- Excel import workflows
- KML parsing and polygon conversion
- Document conversion pipeline (PDF to image previews)

## 9. System Impact

The platform delivered measurable operational improvements for property assessment operations:

- Digitized decades of legacy tax declaration and property records.
- Reduced retrieval and verification from manual file searches to near-real-time lookup.
- Enabled GIS-based visualization of valuation data for planning and taxation analysis.
- Automated certification generation to accelerate citizen-facing workflows.
- Improved transparency through transaction-level workflow tracking and stronger audit readiness.

## 10. Key Metrics

- 6 Municipal Districts
- 900+ Barangays Covered
- Citywide Parcel Coverage
- ~12TB Digitized Property Records on NAS
- 5 Historical Tax Declaration Series (1979, 1985, 1996, 2005, 2014)
- Decades-Spanning Scanned Document Archive
- 55+ API Controllers
- 100+ Eloquent Models
- 250+ API Routes
- 131 Database Migrations
- Multi-NAS Architecture (Synology NAS + Server NAS)
- Redis Caching Server
- Laravel Passport Authentication Server
- 3-Stage QA Workflow (Encoder → Proofreader → Verifier)
- GIS Parcel Polygon Storage
- Barangay and District Boundary Mapping
- Road Network Overlays
- Land-Use Zoning Overlays

## 11. Lessons Learned

Key architectural lessons from this implementation include:

- Queue-based asynchronous processing is essential at government archive scale.
- Clear service-layer boundaries improve maintainability as module count grows.
- Proactive indexing and query shaping are critical for mixed transactional and reporting workloads.
- Security hardening must evolve with document sensitivity and inter-department access.
- Observability and audit trails should be designed early rather than retrofitted.

## 12. Future Improvements

Planned next improvements include:

- Redis queue workers for heavy import and document conversion jobs.
- Reporting microservices to isolate high-cost analytics workloads.
- CDN-backed document preview delivery for faster remote access.
- Formal API versioning for safer long-term integration.
- Expanded GIS tooling for deeper parcel analytics and map-layer governance.
